import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({ // @ : DECORATOR : Replacing data with another data
  declarations: [
    AppComponent, // ClassName in app.component.ts
    LoginComponent // ClassName in login.component.ts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] //ROOT COMPONENT is given inside the bootstrap property 
  // We can change this, by replacing AppComponent with, LoginComponent/any other component
})

export class AppModule { }
