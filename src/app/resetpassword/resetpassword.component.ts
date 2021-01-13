
import { Component, OnInit } from '@angular/core';
import { email } from '../models/email.model';
import { MailPwd, Reset } from '../models/reset.model';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  user:Reset;
  object!:MailPwd;
  obj!:email;
  msg1!:string;
  msg!:string;
  str:any;
  constructor(private userService:UserService,private router:Router) {
    this.user = new Reset();
   }
 OnReset(){
   if(this.obj.otp!=this.user.otp) this.msg1="Enter Valid OTP";
  else{
    this.object= new MailPwd();
    this.object.email=this.user.Email;
    this.object.pwd=this.user.Password;
  this.userService.restPasswordUsingApi(this.object).subscribe(d=>{alert("password changed successfully"),this.router.navigate(['/login'])},error=>this.msg=error.error.Message);
}
 }

 getOTP(){
   this.obj= new email();
   this.obj.otp = Math.floor(100000 + Math.random() * 900000);
   this.obj.mailto=this.user.Email;
   this.userService.sendMailUsingApi(this.obj).subscribe(p=>alert("OTP has been sent to your mail"),error=>this.msg=error.error.Message);
 }
  ngOnInit(): void {
  }

}
