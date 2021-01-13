import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import{ FormsModule } from '@angular/forms';
import { AdminserviceService } from '../services/adminservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  EnteredUserName: any;
  EnteredPassword: any;
  errorMessage: string;

  constructor(private router:Router,private adminService:AdminserviceService) { 
    this.EnteredUserName="";
    this.EnteredPassword="";
    this.errorMessage="";
  }

  ngOnInit(): void {
    sessionStorage.removeItem('UserName');
    sessionStorage.clear();
  }
  login(){
    this.adminService.Login(this.EnteredUserName,this.EnteredPassword).subscribe(data=>{
      console.log(data);
      if(data){
          console.log('Correct Credentials, Login succesfull');
          this.router.navigate(["AdminFlights"]);
      }else{
        console.log('Incorrect Credentials, Login failed');
        this.errorMessage="Incorrect Credentials";

        alert('Incorrect Credentials, Login failed');
      }
    }, (error: any)=>{
      this.errorMessage="Login Failed! Please Try Again.";
    })
  }

}
