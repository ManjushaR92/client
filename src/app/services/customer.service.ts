import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerList={
    firstname:'',
    lastName:'',
    address:'',
    city:'',
    state:'',
    gender:'',
    email:''
  }


  constructor(public http:HttpClient) { }

addCustomers(){
this.customerList;
localStorage.setItem('customerList', JSON.stringify(this.customerList));
}
}
