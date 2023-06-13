import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit{

  studentForm!:FormGroup;

  constructor(private api: ApiService){

  }
  ngOnInit(): void {
    
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
      this.api.psotStudent(studentForm).subscribe((res:any) => {return res})
      
    }
  }

}
