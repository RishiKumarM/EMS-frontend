import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegiSuccesfulComponent } from './Popup/regi-succesful/regi-succesful.component';
import { HomeComponent } from './home/home.component';
import { SignUPComponent } from './Pages/sign-up/sign-up.component';
import { LoginComponent } from './Pages/login/login.component';
import { ForgetPasswordComponent } from './Pages/forget-password/forget-password.component';
import { AddEmployeeComponent } from './Employee/add-employee/add-employee.component';
import { ListEmployeeComponent } from './Employee/list-employee/list-employee.component';
import { TermsConditionComponent } from './Extra/terms-condition/terms-condition.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'signup', component:SignUPComponent},
  {path: 'registration', component:RegiSuccesfulComponent},
  {path: 'login', component:LoginComponent},
  {path: 'forgetpassword', component:ForgetPasswordComponent},
  {path: 'addEmployee', component:AddEmployeeComponent},
  {path: 'listEmployee', component:ListEmployeeComponent},
  {path: 'termsconditions', component:TermsConditionComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
