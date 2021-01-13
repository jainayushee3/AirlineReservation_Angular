import { Component, Input, OnInit } from '@angular/core';
import { ReceivedSchedule } from '../models/ReceivedSchedule';
import { UserSearch } from '../models/usersearch';
import { FlightSearch } from '../services/flightsearch.services';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  @Input()newUser:ReceivedSchedule;

  constructor(private flightService:FlightSearch) { 
    this.newUser= new ReceivedSchedule();
    console.log(this.newUser);
    

//     this.serviceFlight.getSchedule(this.serviceFlight.user.date, this.serviceFlight.user.source, this.serviceFlight.user.destination).subscribe(
//       (u:any) => u.forEach((element:any) => {         
//        console.log(element);      
// this.newUser.date=element.departure_date;  
// this.newUser.source=element.source_loc ;
// this.newUser.destination=element.destination ;  
// this.newUser.departure_time=element.departure_time;    
             
    //   })
    // );

  }

  ngOnInit(): void {    
  
  }

  BuyFC(){
    console.log("FC");
    this.flightService.searched.Selected_Class="FC";
    this.flightService.searched.Selected_Schedule_ID=this.newUser.Schedule_ID;
    this.flightService.searched.Selected_Price=this.newUser.Price_FC;
    this.flightService.selectedSchedule=this.newUser;

  }

  BuyEC(){
    console.log("EC");
    this.flightService.searched.Selected_Class="EC";
    this.flightService.searched.Selected_Price=this.newUser.Price_EC;
    this.flightService.searched.Selected_Schedule_ID=this.newUser.Schedule_ID;
    this.flightService.selectedSchedule=this.newUser;
  }

  BuyBC(){
    console.log("BC");
    console.log(this.newUser.Schedule_ID)
    this.flightService.searched.Selected_Class="BC";
    this.flightService.searched.Selected_Price=this.newUser.Price_BC;
    this.flightService.searched.Selected_Schedule_ID=this.newUser.Schedule_ID;
    this.flightService.selectedSchedule=this.newUser;
  }



}
