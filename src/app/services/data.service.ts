import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService { // data is the name of service, we generated // Thatswhy, DataService is the className
  
  // SERVICES - To hold reduntant things that is used in different files

  // Orupaadu componentsinu dataBase, userDetails aavashyamaanu

  // To hold the dataBase, userDetails


  //Service For DataBase ONLY // Service created to share database ONLY
  // Database in login.ts   is needed in   register.ts

  // THIS SERVICE CONTAINS ONLY DATABASE

  userDetails:any = {                                              // OBJECTS OF OBJECTS
    1000:{acno:1000,username:"Neer",password:1000,balance:5000},   // KeyValue Pair // Key should be acno in case of bank
    1001:{acno:1001,username:"Laisha",password:1001,balance:4000}, // Key should be unique(1000, 1001, 1002)
    1002:{acno:1002,username:"Vyom",password:1002,balance:6000}
  }
//------------------------------------------------------------------------------------------------------------------------------------
  constructor() { }
//------------------------------------------------------------------------------------------------------------------------------------
  
// NOW ONWARDS ALL LOGICS WILL GIVE IN DataService File
// USER DEFINED FUNCTIONS

  // 1.) register function definition
  register(acno:any,username:any,password:any){
    let userDetails = this.userDetails
        // During Registration, userEntered acno should not be in the db userDetails.
        // Now to check, whether userEntered acno present in userDetails. 
        // userDetailsil ulla Existing acno paadilla, Register cheyyunna userku.

    if(acno in userDetails){
      return false    // To register.component.ts
    }else{
      userDetails[acno]  = {  //userDetails[acno] : Setting key in the object
        acno,    // acno : acno   ==> just acno (same variableName aanenkil)
        username,// username : username
        password,// password : password
        balance:0
      }
      console.log(userDetails);
      return true // To register.component.ts
      }
  }

  // 2.) login Function definition
  login(acno:any,pswd:any){ 

    let userDetails = this.userDetails // just to avoid using this.userDetails

    if(acno in userDetails){ // User textBoxil enter cheyyunna accountNumber, userDetailsil undo?
      if(pswd == userDetails[acno]["password"]){ //Here, acno = userEnteredAccNmbr // User textBoxil enter cheyyunna Password == userDetails[acno]["password"]
        return true
      }else{
        alert("Incorrect Password")
        return false
      }
    }else{
      alert("User does not Exists")
      return false
    }
  }

}
