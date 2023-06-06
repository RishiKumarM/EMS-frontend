import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-detail',
  templateUrl: './update-detail.component.html',
  styleUrls: ['./update-detail.component.css']
})
export class UpdateDetailComponent implements OnInit{

  updateForm!:FormGroup;

  constructor(public dialogRef: MatDialogRef<UpdateDetailComponent>,){}

  ngOnInit(): void {
     
    this.updateForm = new FormGroup({
      id: new FormControl('', [Validators.required,]),
      name: new FormControl('', [Validators.required,]),
      age: new FormControl('', [Validators.required,]),
      salary: new FormControl('', [Validators.required,]),
      address: new FormControl('', [Validators.required,]),

    })
  }
  onClose(){
    this.dialogRef.close();
  }

  onNoClick(){

    this.updateForm.reset();
  }
  onDelete(){
    
  }

}
