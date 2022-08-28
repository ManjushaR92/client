import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/customer';


@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  customers = [{
    id:'1',
    firstName: 'John',
    lastName: 'Doe',
    gender: 'Male',
    email: 'john@doe.com',
    address: 'Cross street',
    city: 'Frankfurt',
    state: 'Germany',
}];
  constructor() { }

  ngOnInit(): void {
  }

}
