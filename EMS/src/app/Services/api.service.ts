import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Employee } from '../Employee/list-employee/list-employee.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getEmployee(employees:any)
  {
    console.log(employees);
    return this.http.get("http://localhost:8080/getEmpAll",employees);
    };

    deleteEmployee(id:String)
  {
    return this.http.delete("http://localhost:8080/deleteEmp"+id).pipe(map((response:any)=>{ return response;}));
  } 
  psotStudent(studentForm:any){
    return this.http.post("http://localhost:8080/updateEmp",studentForm).pipe((response:any)=>{return response});
  }  

  updateEmployee(employee:any)
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  let options = { headers: headers };
    return this.http.put("http://localhost:8080/updateEmp",employee,options).pipe(map((response:any)=>{ return response;}));
  }

  postEmployee(employee:any){
    {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
    let options = { headers: headers };
      return this.http.post("http://localhost:8080/postEmp",employee,options).pipe(map((response:any)=>{ return response;}));
    }
  }

}
