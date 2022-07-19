import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService { // data is the name of service, we generated // Thatswhy, DataService is the className
  
  // SERVICES - To use reduntant things in different files

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

  constructor() { }
}
