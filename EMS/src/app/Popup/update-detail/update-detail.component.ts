import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/Services/api.service';
import { SharedService } from 'src/app/Services/shared.service';


@Component({
  selector: 'app-update-detail',
  templateUrl: './update-detail.component.html',
  styleUrls: ['./update-detail.component.css']
})
export class UpdateDetailComponent implements OnInit{

  elements: any = { }; 

  updateForm!:FormGroup;
  private subscription!: Subscription;
  message: { id: string; name: string; age: string; salary: string; address: string; } | undefined;
  client: any;
  constructor(public api: ApiService,private Http:HttpClient,private sharedService: SharedService ,public dialogRef: MatDialogRef<UpdateDetailComponent>,)
  { }

  ngOnInit(): void {

    this.sharedService.element$.subscribe(element => {
     this.elements = element; 
  });
      
    this.getEmployee();
  }

  getEmployee() {
    this.Http.get("http://localhost:8080/getEmpAll").subscribe((response: any) => {
      response;
  })
}

  onClose(){
    this.dialogRef.close();
  }

  onNoClick(){
    this.updateForm.reset();
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      const employee = form.value;
       this.api.updateEmployee(employee).subscribe(res => res);
        this.getEmployee();
        this.dialogRef.close();
    }
    
  }
}
