import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  studentForm!:FormGroup;
  constructor(){}

  ngOnInit(){
    this.studentForm = new FormGroup({
      stid: new FormControl('', [Validators.required,]),
      stname: new FormControl('', [Validators.required,]),
    })
  }

  public myError = (controlName: string, errorName: string) => {
    return this.studentForm.controls[controlName].hasError(errorName);}
  
    onSubmit(studentForm:FormGroup){
  
      this.studentForm.value;
      if(this.studentForm.invalid){
        return;
      }else{
        console.log(studentForm.value);
        
      }
    }
}
