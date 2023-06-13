import { HttpClient } from '@angular/common/http';
import {AfterViewInit, ChangeDetectorRef, Component, NgIterable, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DeleteWarningComponent } from 'src/app/Popup/delete-warning/delete-warning.component';
import { UpdateDetailComponent } from 'src/app/Popup/update-detail/update-detail.component';
import { ApiService } from 'src/app/Services/api.service';
import { SharedService } from 'src/app/Services/shared.service';

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

export class ListEmployeeComponent implements AfterViewInit {
  
  displayedColumns: string[] = ['sno', 'id', 'name', 'age','salary','address','action']
  firstLastButtons = true;
  pageSizeOptions: number[] = [8, 15, 25, 100];
  public pageSize = 8;
  public currentPage = 0;
  public pageLength = 100;
  dataSource :any;
  public array: any;
  isUndoVisible = false;
  checkboxValue:any;
  deleteDEmployee: string | null = null;
  constructor(private backend:ApiService, private Http:HttpClient, public dialog: MatDialog, private sharedService: SharedService, private cdRef: ChangeDetectorRef) {
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.dataSource);
    this.dataSource.paginator = this.paginator;
    this.cdRef.detectChanges();
  }

  ngOnInit(): void {
    this.sharedService.checkboxValueChange.subscribe(value => {
      this.checkboxValue = value });
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
  
  deleteEmployee(element: any) {
    this.dialog.open(DeleteWarningComponent, {
      data: {},
    });
    const index = this.dataSource.indexOf(element);
    if (index !== -1) {
      this.deleteDEmployee = this.dataSource.splice(index, 1)[0];
      this.isUndoVisible = true;
      setTimeout(() => {
        var employee = element;
        this.checkboxValue
        if(this.checkboxValue === false){
          return;
        }if(this.checkboxValue === true){
          this.deleteDEmployee = null;
          this.Http.delete("http://localhost:8080/deleteEmp/"+employee.id).subscribe(response => { 
            this.getEmployee();  
           })
            this.checkboxValue = false;
          }
        this.isUndoVisible = false;
      }, 5000) as any;
    }
  }

  undoDelete() {
    if (this.deleteEmployee) {
      this.dataSource.push(this.deleteEmployee); // Restore the item
      this.deleteDEmployee = null;
      this.isUndoVisible = false;
    }
  }

   onUpdate(element: string){
    this.sharedService.UpdateValueChange(element);
    const dialogRef = this.dialog.open(UpdateDetailComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  
   }
   

}



