import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';

export interface Employee {
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
export class ListEmployeeComponent implements AfterViewInit,OnInit {
  displayedColumns: string[] = ['sno','id', 'name', 'age', 'salary', 'address', 'action'];
  dataSource = new MatTableDataSource<Employee>();
  // employees: Employee[] = [];
  employees:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  constructor(private api: ApiService, private Http:HttpClient ){}
  
  ngOnInit(): void {
  console.log(this.employees);
  
  }

  getEmployee() {
    this.Http.get("http://localhost:8080/getEmpAll").subscribe((response: any) => {this.employees = response; });
}

deleteEmployee(employee:any){
  console.log(employee);
  // const index = this.employees.indexOf(employee);
  this.Http.delete("http://localhost:8080/deleteEmp/"+employee.id).subscribe(response => { alert("Detail has been Deleted!!")
  this.getEmployee();
});
}

}



