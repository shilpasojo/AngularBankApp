import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService { // data is the name of service, we generated // Thatswhy, DataService is the className
  
  // SERVICES - To hold reduntant things that is used in different files

  // Orupaadu componentsinu dataBase, userDetails aavashyamaanu

  // To hold the dataBase, userDetails

  // LOGIN USERNAME To get userName in dashboard, when login is success(WELCOME NEER)
  // Login cheydha aalude name store cheyyan ulla varaible
  currentUser:any
  
  // LOGIN ACCOUNTNUMBER
  currentAcno:any

  //Service For DataBase ONLY // Service created to share database ONLY
  // Database in login.ts   is needed in   register.ts

  userDetails:any = {                                              // OBJECTS OF OBJECTS
    1000:{acno:1000,username:"Neer",password:1000,balance:5000, transaction:[]},   // KeyValue Pair // Key should be acno in case of bank
    1001:{acno:1001,username:"Laisha",password:1001,balance:4000, transaction:[]}, // Key should be unique(1000, 1001, 1002)
    1002:{acno:1002,username:"Vyom",password:1002,balance:6000, transaction:[]}
  }
//------------------------------------------------------------------------------------------------------------------------------------
  constructor() { 
    this.getDetails()
  }
//------------------------------------------------------------------------------------------------------------------------------------
  
// NOW ONWARDS ALL LOGICS WILL GIVE IN DataService File
// USER DEFINED FUNCTIONS

  // 1.) REGISTER FUNCTION (LOGIC) DEFINITION
  register(acno:any,username:any,password:any){ // user enter cheyyunna values, during registration
    let userDetails = this.userDetails
        // During Registration, userEntered acno should not be in the db userDetails.
        // Now to check, whether userEntered acno present in userDetails. 
        // userDetailsil ulla Existing acno paadilla, Register cheyyunna userku.

    if(acno in userDetails){
      return false    // To register.component.ts
    }else{
      userDetails[acno]  = {  //userDetails[acno] : Setting key in the object
        acno,    // acno : acno   ==> just acno (keyName = valueName)
        username,// username : username
        password,// password : password
        balance:0,
        transaction:[] // To show Transaction History
//userDetails[acno]  = {acno:acno, username:username, password:password, balance:0, transaction:[]}
//userDetails[acno]  = {acno,username,password,balance:0}
      }
      this.saveDetails()
      console.log(userDetails); // should before return, otherwise will not execute
      return true // To register.component.ts
      }
  }
//----------------------------------------------------------------------------------------------------
  // 2.) LOGIN FUNCTION (LOGIC) DEFINITION
  login(acno:any,pswd:any){ // User Enter cheyyunna values

    let userDetails = this.userDetails // just to avoid using this.userDetails

    if(acno in userDetails){ // User textBoxil enter cheyyunna accountNumber, userDetailsil undo?
      if(pswd == userDetails[acno]["password"]){ //Here, acno = userEnteredAccNmbr // User textBoxil enter cheyyunna Password == userDetails[acno]["password"]
        // console.log(userDetails); // should before return
        // HERE, Login is Successfull
        
        this.currentUser = userDetails[acno]["username"] 
        // LOGIN USERNAME // WELCOME NEER // StringInterpolation
        
        this.currentAcno = acno   // CurrentUser's LOGIN ACCOUNTNUMBER 
        
        this.saveDetails()
        
        return true
      
      }
      else{
        alert("Incorrect Password")
        return false
      }
    }
      else{
      alert("User does not Exists")
      return false
      }
  }
//-------------------------------------------------------------------------------------------------------
 // 3. a.) DASHBOARD - DEPOSIT FUNCTION 
 deposit(acno:any,pswd:any,amt:any){
   
  let userDetails = this.userDetails
  var amount = parseInt(amt) // Converting Amount from String to Number

  if(acno in userDetails){
    if(pswd == userDetails[acno]["password"]){
      userDetails[acno]["balance"]+=amount // Deposit step
      
      userDetails[acno]["transaction"].push({ // To show Transaction History
        TYPE:"CREDIT",
        amount
      })
      
      this.saveDetails()

      console.log(userDetails);
      return userDetails[acno]["balance"]// Existing balance
    }
    else{
      alert("Incorrect Password")
      return false
    }
  }
  else{
    alert("User does not exists")
    return false
  }
}
//----------------------------------------------------------------------------------------------------------------
 // 3. b.) DASHBOARD - WITHDRAW FUNCTION
 withdraw(acno:any,pswd:any,amt:any){
   
  let userDetails = this.userDetails
  var amount = parseInt(amt) // String to Number Conversion of Amount

  if(acno in userDetails){
    if(pswd == userDetails[acno]["password"]){
       
      if(userDetails[acno]["balance"]>amount){
        userDetails[acno]["balance"]-=amount // Withdraw step
        
        userDetails[acno]["transaction"].push({ // To show Transaction History
          TYPE:"DEBIT",
          amount
        })
        
        this.saveDetails()

        console.log(userDetails);
        return userDetails[acno]["balance"] //Existing Balance
      }
      else{
        alert("InSufficient Balance")
        return false
      }
    }
    else{
      alert("Incorrect Password")
      return false
    }
  }
  else{
    alert("User does not exists")
    return false
  }
}
//----------------------------------------------------------------------------------------------------------------
 // 4.) TRANSACTION FUNCTION
 getTransaction(acno:any){
  return this.userDetails[acno]["transaction"] //Here, we will get the transactionArray of logined user
 }
//----------------------------------------------------------------------------------------------------------------------------
// 5.) To Store Datas Permanently in localStorage //db, currentAcno, currentUser
       // This function is called in RegisterSuccess,LoginSuccess,DepositSuccess,WithdrawSuccess
saveDetails(){
  //To store database
  if(this.userDetails){
    localStorage.setItem("database",JSON.stringify(this.userDetails))
  }
  if(this.currentAcno){
    localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
  }
  if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
  }
}
//---------------------------------------------------------------------------------------------------------------
// 6.) To Get Datas from localStorage // This function is called in constructor section
       // Page refresh cheydhalum, in WELCOME NEER => NEER name povilla
getDetails(){
  // Get DataBase
  if(localStorage.getItem("database")){
    this.userDetails = JSON.parse(localStorage.getItem("database") || "")
  }
  // Get CurrentAcno
  if(localStorage.getItem("currentAcno")){
    this.currentAcno = JSON.parse(localStorage.getItem("currentAcno") || "")
  }
  // Get CurrentUser
  if(localStorage.getItem("currentUser")){
    this.currentUser = JSON.parse(localStorage.getItem("currentUser") || "")
  }
}
//---------------------------------------------------------------------------------------------------------------

}
