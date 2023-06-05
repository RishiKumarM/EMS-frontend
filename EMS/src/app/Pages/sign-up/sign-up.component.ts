import { Component, HostListener, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { validateVerticalPosition } from '@angular/cdk/overlay';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUPComponent implements OnInit {
  regesrationForm!: FormGroup;
  hide = true;
  isVerified = false;
  notVerified = true;
  isPasswordMatch!: boolean;
  password = '';
  confirmPassword = '';
  adminId = localStorage.getItem('adminId');
  keyPress(event: any) {
    Validators.pattern(/^[6-9]\d{9}$/)
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  restrictZero(event: any) {
    if (event.target.value.length === 0 && event.key === "0") {
      event.preventDefault();
    }
  }
  letterOnly(event: { which: any; keyCode: any; }): Boolean {
    var keyCode = (event.which) ? event.which : event.keyCode
    if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32)
      return false;
    return true;
  }

  OnlyNumbersAllowed(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {

      return false;
    }

    return true;
  }
  constructor(private location: Location) 
  { }

  ngOnInit(): void {

      this.regesrationForm = new FormGroup({
        adminId: new FormControl(this.adminId, Validators.required),
        fname: new FormControl('', [Validators.required, Validators.pattern(/[(\[a-zA-Z0-9\])\\1{2,}\\[~`!@#$%^&()_={}[\]:;,.<>+\/?-]/)]),
        lname: new FormControl('', [Validators.required, Validators.pattern(/[(\[a-zA-Z0-9\])\\1{2,}\\[~`!@#$%^&()_={}[\]:;,.<>+\/?-]/)]),
        email: new FormControl('', [Validators.required, Validators.email,  Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
        phone: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0_%+-)?[6,7,8,9][0-9]{0,9}$")]),
        password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])
      }, { validators: this.passwordMatchValidator }
      );
    }
  
    passwordMatchValidator(control: AbstractControl) {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;
  
      if (password === confirmPassword) {
        return null;
      } else {
        return { passwordMismatch: true };
      }
    }

  public myError = (controlName: string, errorName: string) => {
    return this.regesrationForm.controls[controlName].hasError(errorName);
  }

  goBack(): void{
    this.location.back();
  }

  onSubmit(event:any, regesrationForm:FormGroup){

  }

}


