import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [// Routing : To set paths from one page to another // {p,c}
  // 1.) login path : login html page // localhost:4200
  {path:"",component:LoginComponent}, //pathName,componentName // emptyString denotes, it will be the frontPage
  
  // 2.) dashBoard Path : dashboard html page // localhost:4200/dashboard
  {path:"dashboard",component:DashboardComponent},
  
  // 3.) register Path : register html page // localhost:4200/register
  {path:"register",component:RegisterComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
