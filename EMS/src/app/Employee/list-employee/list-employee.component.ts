import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component, NgIterable, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DeleteWarningComponent } from 'src/app/Popup/delete-warning/delete-warning.component';
import { UpdateDetailComponent } from 'src/app/Popup/update-detail/update-detail.component';
import { ApiService } from 'src/app/Services/api.service';

export interface Employee {
  sno: number;
  id: number;
  name: string;
  age: number;
  salary: number;
  address: string;
  action: string;
}
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})

export class ListEmployeeComponent implements OnInit {
  
  displayedColumns: string[] = ['sno', 'id', 'name', 'age','salary','address','action']
  public array: any;
  firstLastButtons = true;
  pageSizeOptions: number[] = [7, 10, 25, 100];
  public pageSize = 7;
  public currentPage = 0;
  public pageLength = 100;
  dataSource :any;
  constructor(private backend:ApiService, private Http:HttpClient, public dialog: MatDialog) {
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {

    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.getEmployee();  
  }

  getEmployee() {
    this.Http.get("http://localhost:8080/getEmpAll").subscribe((response: any) => {
    this.dataSource = new MatTableDataSource<Element>(response);  
      this.array = response;  
      this.pageLength = this.array.length;
      this.iterator();
  })
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }
  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.slice(start, end);
    this.dataSource = part;
  }
  
  deleteEmployee(): void {
    const dialogRef = this.dialog.open(DeleteWarningComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  
    });
    this.getEmployee();
  }
    // this.Http.delete("http://localhost:8080/deleteEmp/"+employee.id).subscribe(response => { alert("Detail has been Deleted!!")

   onClick(): void{
    const dialogRef = this.dialog.open(UpdateDetailComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  
    });
  
   }

}



