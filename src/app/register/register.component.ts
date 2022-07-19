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
  
  // DataService inte akathulla userDetails,ne, register.component.tsil kittanam
  // DataService inte akathulla details (i.e., userDetails) ,, ds(can be any variableName) il vannu
  
  // private : access specifier
  // ds is any variable/property of class RegisterComponent
  // DataService is the className of data.service.ts
  // ds il userDetails enna dataBase vannu

  // userDetails ==> DataService ==> ds ==========> this.ds.userDetails

  ngOnInit(): void {
  }

  register(){
    alert("Register Clicked")

    var uname = this.uname // just to discard this. keyword
    var acno = this.acno   // just to discard this. keyword
    var pswd = this.pswd   // just to discard this. keyword

    // Now to check, whether userEntered acno present in userDetails. 
    // userDetailsil ulla Existing acno paadilla Register cheyyunna userku

    // But, here, there is no userDetails dataBase. 
    // It is in login.component.ts
    // This fileil db venam. Eni varan povunna deposit fileilum db venam
    
    // So, orupaadu componentsinu, same userDetails db venam
    // SERVICE -> Same karyam thanne, orupadu filesil , reduntant aayi use cheyyanu

    let userDetails = this.ds.userDetails   // ds il userDetails enna dataBase vannu

  }

}
