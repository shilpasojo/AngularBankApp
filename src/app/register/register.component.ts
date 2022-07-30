import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  
  // uname = "" // user Entering uname
  // acno = ""
  // pswd = ""

  //RegisterModel FORM =>For FORM VALIDATION //private fb:FormBuilder(D.I) -> GROUP, ARRAY, CONTROL 
  registerForm = this.fb.group({ // GROUP
    uname:["",[Validators.required,Validators.pattern("[a-zA-Z]*")]], // ARRAY
    acno:["",[Validators.required,Validators.pattern("[0-9]*")]], // ARRAY
    pswd:["",[Validators.required,Validators.pattern("[a-zA-Z0-9]*")]]  // ARRAY
  })

//--------------------------------------------------------------------------------------------------------------------------

  constructor(private ds:DataService, private router:Router, private fb:FormBuilder) { } // DEPENDENCY INJECTION
  
  // DataService inte akathulla userDetails,ne, register.component.tsil kittanam
  // DataService inte akathulla details (i.e., userDetails) ,, ds(can be any variableName) il vannu
  
  // private : access specifier
  // ds is any variable/property of class RegisterComponent
  // DataService is the className of data.service.ts
  // ds il userDetails enna dataBase vannu

  // userDetails ==> DataService ==> ds ==========> this.ds.userDetails
//--------------------------------------------------------------------------------------------------------------------------

  ngOnInit(): void {
  }
//--------------------------------------------------------------------------------------------------------------------------
register(){ // DataService
    // alert("Register Clicked")

    // var uname = this.uname // just to discard this. keyword
    // var acno = this.acno   // just to discard this. keyword
    // var pswd = this.pswd   // just to discard this. keyword

    //REGISTER MODEL FORM
    var uname = this.registerForm.value.uname  // formControlName="uname"(2WayBinding)
    var acno = this.registerForm.value.acno    // formControlName="acno" (2WayBinding) 
    var pswd = this.registerForm.value.pswd    // formControlName="pswd" (2WayBinding)

    // But, here, there is no userDetails dataBase. 
    // It is in login.component.ts
    // This fileil db venam. Eni varan povunna deposit fileilum db venam
    
    // So, orupaadu componentsinu, same userDetails db venam. So go for SERVICES.
    // SERVICE -> Same karyam thanne, orupadu filesil , reduntant aayi use cheyyanu
    //         -> To hold reduntant data

    // let userDetails = this.ds.userDetails   // ds il userDetails enna dataBase vannu

    if(this.registerForm.valid){ // Only if Valid
    // Register function is defined in DataService
    const result = this.ds.register(acno,uname,pswd) // This is functionCalling which is defined in DataService 
                                                     // result = returnValue => either true/false
    if(result){ // return true
      alert("Registered Successfully") 
      this.router.navigateByUrl("")    // reDirect to loginPage
    }else{      // return false
      alert("User Already Exists..Please LogIn...") 
      this.router.navigateByUrl("")                 // reDirect to loginPage
    }
  }
    else{
      alert("INVALID FORM")
    }
}
//----------------------------------------------------------------------------------------------------------------------
}
