import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  // DEPOSIT FORM VARIABLES
  // acno=""
  // pswd=""
  // amount=""

  //VALIDATION
  depositForm = this.fb.group({ // GROUP
    acno:["",[Validators.required,Validators.pattern("[0-9]*")]], // ARRAY
    pswd:["",[Validators.required,Validators.pattern("[a-zA-Z0-9]*")]], // ARRAY
    amount:["",[Validators.required,Validators.pattern("[0-9]*")]] // ARRAY
  })

//--------------------------------------------------------------------------------------------------------
  
// WITHDRAWAL FORM VARIABLES
  // acno1=""
  // pswd1=""
  // amount1=""

  //VALIDATION
  withdrawForm = this.fb.group({ // GROUP
    acno1:["",[Validators.required,Validators.pattern("[0-9]*")]], // ARRAY
    pswd1:["",[Validators.required,Validators.pattern("[a-zA-Z0-9]*")]],  // ARRAY
    amount1:["",[Validators.required,Validators.pattern("[0-9]*")]] // ARRAY
  })

//-------------------------------------------------------------------------------------------------------
  
  // LOGIN USERNAME
  user="" // WELCOME NEER

  //SHARE TO CHILD(delete-confirmation)
  acno: any;

  constructor(private ds:DataService, private fb:FormBuilder, private router:Router) { //arguments
    this.user = this.ds.currentUser  // WELCOME NEER //Inside body //asssignment
    // LOGIN USERNAME //Page open aavumbol thanne userName varanam. Thatswhy, inside constructor
  }

  ngOnInit(): void {
    if(!localStorage.getItem("currentAcno")){ //During LogOut
      alert("Please LogIn")
      this.router.navigateByUrl("")
    }
  }

//--------------------------------------------------------------------------------------------------------------------

  // DEPOSIT FUNCTION
  deposit(){
    var acno = this.depositForm.value.acno
    var pswd = this.depositForm.value.pswd
    var amount = this.depositForm.value.amount

    if(this.depositForm.valid){
      const result = this.ds.deposit(acno,pswd,amount)//Calling deposit function defined in dataService

      if(result){
        alert(`${amount} is credited, New Balance is : ${result}`)
      }
  
    }else{
      alert("INVALID FORM")
    }
}

//--------------------------------------------------------------------------------------------------------------------

  // WITHDRAWAL FUNCTION
  withdraw(){
    var acno1 = this.withdrawForm.value.acno1
    var pswd1 = this.withdrawForm.value.pswd1
    var amount1 = this.withdrawForm.value.amount1

    if(this.depositForm.valid){
      const result = this.ds.withdraw(acno1,pswd1,amount1)

      if(result){
        alert(`${amount1} is debited, New Balance is : ${result}`)
      }
  
    }else{
      alert("INVALID FORM")
    }
  }
//------------------------------------------------------------------------------------------------------------------
// LOG OUT FUNCTION
logOut(){
  // Remove LoginAcno and UserName
  localStorage.removeItem("currentAcno")
  localStorage.removeItem("currentUser")
  // Navigate to LoginPage
  this.router.navigateByUrl("")
}
//------------------------------------------------------------------------------------------------------------------
deleteParent(){
  //Getting currentAcno from localStorage & storing it to this.acno
  this.acno =  JSON.parse(localStorage.getItem("currentAcno") || "")
}
//------------------------------------------------------------------------------------------------------------------
}
