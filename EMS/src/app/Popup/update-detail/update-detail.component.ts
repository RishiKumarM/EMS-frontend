import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-update-detail',
  templateUrl: './update-detail.component.html',
  styleUrls: ['./update-detail.component.css']
})
export class UpdateDetailComponent implements OnInit{

  updateForm!:FormGroup;

  constructor(public api: ApiService,private Http:HttpClient ,public dialogRef: MatDialogRef<UpdateDetailComponent>,){}

  ngOnInit(): void {
    this.getEmployee();
     
    this.updateForm = new FormGroup({
      id: new FormControl('', [Validators.required,]),
      name: new FormControl('', [Validators.required,]),
      age: new FormControl('', [Validators.required,]),
      salary: new FormControl('', [Validators.required,]),
      address: new FormControl('', [Validators.required,]),

    })
  }

  getEmployee() {
    this.Http.get("http://localhost:8080/getEmpAll").subscribe((response: any) => { return response;}
  )};

  onClose(){
    this.dialogRef.close();
  }

  onNoClick(){

    this.updateForm.reset();
  }
  onDelete(){
    var employee = this.updateForm.value;
    if(this.updateForm.invalid){
      return;
    }else{
       this.api.updateEmployee(employee).subscribe((res:any) => {
         alert("data has been updated");
         return res;
        })
        this.getEmployee();
        this.dialogRef.close();
    }
  }

}
