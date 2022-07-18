import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // To get ngModel
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({ // @ : DECORATOR : Replacing data with another data
  declarations: [
    AppComponent, // ClassName in app.component.ts
    LoginComponent, DashboardComponent // ClassName in login.component.ts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  // To get ngModel
  ],
  providers: [],
  bootstrap: [AppComponent] //ROOT COMPONENT is given inside the bootstrap property 
  // We can change this, by replacing AppComponent with, LoginComponent/any other component
})

export class AppModule { }

// IMPORTING THIRD PARTY LIBRARIES --> in app.module.ts
