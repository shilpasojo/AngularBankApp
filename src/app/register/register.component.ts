import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname = ""
  acno = ""
  pswd = ""

  constructor(private ds:DataService) { } // DEPENDENCY INJECTION
  // DataService inte akathulla details (i.e., userDetails) ,, ds(can be any variableName) il vannu
  
  // private : access specifier
  // ds is the property of class RegisterComponent
  // DataService is the className of data.service.ts
  // ds il userDetails enna dataBase vannu

  // userDetails ==> DataService ==> ds ==========> this.ds.userDetails

  ngOnInit(): void {
  }

  register(){
    alert("Register Clicked")

    var uname = this.uname
    var acno = this.acno
    var pswd = this.pswd

    let userDetails = this.ds.userDetails   // ds il userDetails enna dataBase vannu

  }

}
