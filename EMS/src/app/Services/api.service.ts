import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Employee } from '../Employee/list-employee/list-employee.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getEmployeeList():  Observable<Employee[]>{
    const url = 'http://localhost:8080/getEmpAll';
    return this.http.get<Employee[]>(url);
  }
}
