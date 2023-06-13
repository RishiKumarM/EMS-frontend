import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import { Employee } from '../list-employee/list-employee.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Addsuccesful } from './addsuccessful';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{

  addForm!:FormGroup;
  @Output() employeeAdd: EventEmitter<Employee> = new EventEmitter();
  message: any;

  constructor(private backend:ApiService, private client: HttpClient, public dialog: MatDialog){}

  ngOnInit(): void {
     
    this.addForm = new FormGroup({
      id: new FormControl('', [Validators.required,]),
      name: new FormControl('', [Validators.required, Validators.pattern(/[(\[a-zA-Z0-9\])\\1{2,}\\[~`!@#$%^&()_={}[\]:;,.<>+\/?-]/)]),
      age: new FormControl('', [Validators.required, Validators.pattern(/^[1-9][0-9]?$/)]),
      salary: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
      address: new FormControl('', [Validators.required]),

    })
  }

  public myError = (controlName: string, errorName: string) => {
    return this.addForm.controls[controlName].hasError(errorName);
  }
  onNoClick(){

    this.addForm.reset();
  }

  onAddEmp(){
    var employee = this.addForm.value;
      if(this.addForm.invalid){
        this.client.jsonp("fields cannot be empty !!","OK");
        return;
      }else{
        let response=this.backend.postEmployee(employee);
        response.subscribe((response:any)=>this.message = employee);
        alert("Employee data has been added!!") 
      }
    }
  }