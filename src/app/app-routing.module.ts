import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [// Routing : To set paths from one page to another // {p,c}
  // login path : login html page
  {path:"",component:LoginComponent}, //pathName,componentName // emptyString denotes, it will be the frontPage
  // dashBoard Path : dashboard html page
  {path:"dashboard",component:DashboardComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
