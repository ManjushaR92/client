import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/customer';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer= new Customer('','','','','','','');

  constructor(public router: Router) { }

  ngOnInit(): void {

    this.customer=JSON.parse(JSON.stringify(this.customer));
    localStorage.getItem("token");
  }
onClick(){
  this.customer;
  localStorage.setItem("token", JSON.stringify(this.customer));
  this.router.navigate(['cardview']);
}
}
