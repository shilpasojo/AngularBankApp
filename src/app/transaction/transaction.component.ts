import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  //VARIABLES DECLARATION
  
  //To hold acno of currentUser
   acno:any

   // To hold transaction Array of currentUser
   transactions:any
  
//------------------------------------------------------------------------------------------------------ 
  
   constructor(private ds:DataService) { //PAGE LOAD AVUMBOL THANNE VARANAM. So inside constuctor(){}
    //We have to get the value of current acno from dataService
    this.acno = this.ds.currentAcno
    //To get transaction Array from dataService
    this.transactions = this.ds.getTransaction(this.acno)
    console.log(this.transactions);
  }
//------------------------------------------------------------------------------------------------------ 

  ngOnInit(): void {
  }

}
