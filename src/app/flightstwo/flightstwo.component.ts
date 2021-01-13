import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReceivedSchedule } from '../models/ReceivedSchedule';
import { UserSearch } from '../models/usersearch';
import { FlightSearch } from '../services/flightsearch.services';

@Component({
  selector: 'app-flightstwo',
  templateUrl: './flightstwo.component.html',
  styleUrls: ['./flightstwo.component.css']
})
export class FlightstwoComponent implements OnInit {

  oneWay: ReceivedSchedule[];
  twoWay: ReceivedSchedule[];
  input1: UserSearch[];
  input2: UserSearch[];



  constructor(private flightService:FlightSearch, private router:Router) { 
    this.oneWay = [];
    this.twoWay=[];
    this.input1=[];
    this.input2=[];

    this.flightService.getSchedule(this.flightService.searched.Dep_Date, this.flightService.searched.Source_Loc, this.flightService.searched.Destination).subscribe(
      (u:any) => u.forEach((element:any) => {  
         console.log(element);   
         this.oneWay.push(element);     
      })
    );

    this.flightService.getSchedule(this.flightService.searched.return_date, this.flightService.searched.Destination, this.flightService.searched.Source_Loc).subscribe(
      (u:any) => u.forEach((element:any) => {  
         console.log(element);   
         this.twoWay.push(element);     
      })
    );

console.log(this.oneWay);
console.log(this.twoWay);
console.log(this.flightService.searched.ticket_type);

  }

  // onSelectFC(){
  //   this.flightService.searched.Selected_Class="FC"
  //   this.flightService.searched.Selected_Price=this.twoWay.Price_FC 
  //   this.router.navigate(["/passengerdetails"])
  // }
  // onSelectBC(){
  //   this.flightService.searched.Selected_Class="FC"
  //   this.flightService.searched.Selected_Price=this.twoWay.Price_FC 
  //   this.router.navigate(["/passengerdetails"])
  // }
  // onSelectEC(){
  //   this.flightService.searched.Selected_Class="FC"
  //   this.flightService.searched.Selected_Price=this.twoWay.Price_FC 
  //   this.router.navigate(["/passengerdetails"])
  // }

  ngOnInit(): void {
  }

}
