import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:any;
  msg:string;
  str:any;
  // p="/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/";
  constructor(private userService:UserService) { 
    this.user = new User();
  }

  InsertUser(){
     this.userService.addUserUsingApi(this.user).subscribe(data=>this.str=data,
      error=>this.msg=error.error.Message);
      if(this.str=="Registerd Successfully"){
        alert("Registered Successfully");
      }
   }
  ngOnInit(): void {
  }

}
