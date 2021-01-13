import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin:User;
  user:any;
  msg:any;
  constructor(private userService:UserService, private router:Router) {
    this.userLogin = new User();
   }
   onLogin(){
    this.userService.loginUserUsingApi(this.userLogin).subscribe(
      u=>{this.user=u,console.log(this.userLogin),sessionStorage.setItem('user',this.user.User_ID) ,
        this.router.navigate([""])
      },
      error=>{this.msg=error.error.Message},
      ); 
   }
   
   logOut(){
     sessionStorage.removeItem('user');
   }
  ngOnInit(): void {
  }
}
