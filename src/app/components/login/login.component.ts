import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

userModel = new User('','');

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
onSubmit(){

this.userModel;
localStorage.setItem("token", JSON.stringify(this.userModel));
this.router.navigate(['/customer']);

  console.log(this.userModel);
 
}
}
