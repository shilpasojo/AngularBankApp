// Inside a ts file, three sections are there => IMPORT SECTION, DECORATOR SECTION, CLASS SECTION

// Inside CLASS SECTION : 
// a.) Variable Declaration, Database Creation, Properties =>3rd Execution
// b.) constructor(){}                                     =>1st Execution
// c.) ngOnInit(){}                                        =>2nd Execution
// d.) UserDefinedFunctions                                =>LAST Execution


import { Component, OnInit } from '@angular/core'; // IMPORT SECTION
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({ // @ : DECORATOR SECTION
  selector: 'app-login', // SELECTOR of LoginComponent
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// CLASS SECTION
export class LoginComponent implements OnInit { // Basic Structure of CLASS inside a Component

  // A.) 3RD EXECUTION => PROPERTIES / VARIABLES / DATABASE CREATION
  // Classinte inside ulla variablesine, .this keyword vechu, aa classinte insideil ulla, all functionsinum access cheyyam

  aim = "Your Perfect Banking Partner"      // DATA BINDING, STRING INTERPOLATION (ts->html) //public access speciier

  account = "Enter your Account Number Here" // PROPERTY BINDING (ts->html) //public access speciier(we can access this variable anywhere)
  password = "Enter your Password Here"

  // acno = "" // User textBoxil enter cheyyunna accountNumber, store cheyyanulla variable
  // pswd = "" // User textBoxil enter cheyyunna Password, store cheyyanulla variable
  // acno & pswd, classile variable aayadhu kondu, .this keyword vechu, functionsinte inside access cheyyam


  //VALIDATION
  loginForm = this.fb.group({ // GROUP
    acno: ["", [Validators.required, Validators.pattern("[0-9]*")]], // ARRAY
    pswd: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]*")]]  // ARRAY
  })


  // CREATING DATABASE => bank
  // userDetails:any = {  // OBJECTS OF OBJECTS
  // 1000:{acno:1000,username:"Neer",password:1000,balance:5000},   // KeyValue Pair // Key should be acno in case of bank
  // 1001:{acno:1001,username:"Laisha",password:1001,balance:4000}, // Key should be unique(1000, 1001, 1002)
  // 1002:{acno:1002,username:"Vyom",password:1002,balance:6000}
  // }
  //---------------------------------------------------------------------------------------------------------------
  // B.) 1ST EXECUTE => CONSTRUCTOR - It is related to Class (Class is a component of Angular)
  // CONSTRUCTOR is a method, of the ((class to instantiate objects))
  // Classile constructor method, oru object create avumbol, automatically call aavum
  // constructor() { } 

  // DEPENDENCY INJECTION should given as arguments of constructor method
  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }
  // router is the object/variable/property of LoginComponentClass 
  // router ==>(should be private, i.e., router will access in this ts file only)
  // Router is the ClassName
  // navigateByUrl() is a method inside RouterClass

  // So, routeril, RouterClassinte Object undu.

  // Extra oru import statement automatically topil varum 
  // private access specifier
  // router is a variable in this class, i.e., LoginComponent
  // This is used after LoginSuccess

  //---------------------------------------------------------------------------------------------------------------

  // C.) 2ND EXECUTE => NGONINIT - It is related to Angular  - LifeCycleHook of Angular 
  // oru component undavumbol, enthoke nadakkanam ennu paranjhu kodukkunna place. 
  // Eg, Testing. Whether the component is ok / not
  ngOnInit(): void {
  }
  //---------------------------------------------------------------------------------------------------------------

  // D.) 4TH EXECUTE => USER DEFINED FUNCTIONS 

  // FIRST FUNCTION -> EVENT BINDING $event
  // Oru Classinte ullil function ezhuthumbol, function keyword venda.
  // acnoChange(event:any){
  // console.log(event); // Will get the entire event, while user entering an acountNumber in the textBox
  // event.target.value = user enter cheydhitulla accountNumber
  // this.acno = event.target.value  // event.target.value => User textBoxil enter cheyyunna accountNumber, i.e, = 1000
  // console.log(this.acno);  // 1000
  // }

  // SECOND FUNCTION -> EVENT BINDING $event
  // Oru Classinte ullil function ezhuthumbol, function keyword venda.
  // pswdChange(event:any){
  // this.pswd = event.target.value // event.target.value => User textBoxil enter cheyyunna password = 1000
  // console.log(this.pswd);  // 1000
  // }

  //THIRD FUNCTION -> login  => EVENT BINDIND  => (click)="login()" in html
  // Oru Classinte ullil function ezhuthumbol, function keyword venda.
  // login(){
  // alert("Login Button Clicked")

  // var acno = this.acno // User textBoxil enter cheyyunna accountNumber // just to avoid using this.userDetails
  // var pswd = this.pswd // User textBoxil enter cheyyunna Password      // just to avoid using this.userDetails

  // let userDetails = this.userDetails // just to avoid using this.userDetails

  // if(acno in userDetails){ // User textBoxil enter cheyyunna accountNumber, userDetailsil undo?
  // if(pswd == userDetails[acno]["password"]){ //Here, acno = userEnteredAccNmbr // User textBoxil enter cheyyunna Password == userDetails[acno]["password"]
  //       alert("Login Success")
  //     }else{
  //       alert("Incorrect Password")
  //     }
  //   }else{
  //     alert("User does not Exists")
  //   }
  // }
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // SECOND METHOD (EVENT BINDING using Template Referencing Variable)

  // login(a:any,p:any){ // login function using two arguments

  // console.log(a.value);
  // console.log(p.value);

  // var acno = a.value // User textBoxil enter cheyyunna accountNumber 
  // var pswd = p.value // User textBoxil enter cheyyunna Password      

  // let userDetails = this.userDetails // just to avoid using this.userDetails

  // if(acno in userDetails){ // User textBoxil enter cheyyunna accountNumber, userDetailsil undo?
  // if(pswd == userDetails[acno]["password"]){ //Here, acno = userEnteredAccNmbr // User textBoxil enter cheyyunna Password == userDetails[acno]["password"]
  //       alert("Login Success")
  //     }else{
  //       alert("Incorrect Password")
  //     }
  //   }else{
  //     alert("User does not Exists")
  //   }
  // }
  //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // THIRD METHOD (TWO WAY BINDING Using ngModel)

  // login(){ // TWO WAY BINDING Using ngModel

  // var acno = this.acno // User textBoxil enter cheyyunna accountNumber 
  // var pswd = this.pswd // User textBoxil enter cheyyunna Password      

  // let userDetails = this.userDetails // just to avoid using this.userDetails

  // if(acno in userDetails){ // User textBoxil enter cheyyunna accountNumber, userDetailsil undo?
  // if(pswd == userDetails[acno]["password"]){ //Here, acno = userEnteredAccNmbr // User textBoxil enter cheyyunna Password == userDetails[acno]["password"]
  // alert("Login Success")
  // this.router.navigateByUrl("dashboard")//DEPENDENCY INJECTION//To redirect to dashboardPage after loginSuccess
  // }else{
  // alert("Incorrect Password")
  //     }
  //   }else{
  //     alert("User does not Exists")
  //   }
  // }
  //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // login Function //DataService
  login() {
    var acno = this.loginForm.value.acno
    var pswd = this.loginForm.value.pswd

    if (this.loginForm.valid) {
      const result = this.ds.login(acno, pswd) // This is functionCalling which is defined in DataService 
                                               // result = returnValue => either true/false
      if (result) {
        alert("Login Success")
        this.router.navigateByUrl("dashboard")
      }
    }
    else {
      alert("Invalid Form")
    }
  }
  //-------------------------------------------------------------------------------------------------------------

} // End of Class, inside an Angular Component
