import { Component, OnInit } from '@angular/core';
import { ReceivedSchedule } from '../models/ReceivedSchedule';
import { UserSearch } from '../models/usersearch';
import { FlightSearch } from '../services/flightsearch.services';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  newUsers: ReceivedSchedule[];
  input: UserSearch[];
  i:number=0;
  

  constructor(private serviceFlight:FlightSearch) {
    this.newUsers = [];
    this.input=[];
     
    this.serviceFlight.getSchedule(this.serviceFlight.searched.Dep_Date, this.serviceFlight.searched.Source_Loc, this.serviceFlight.searched.Destination).subscribe(
            (u:any) => u.forEach((element:any) => {  
               console.log(element.Price_FC);   
               this.newUsers.push(element);     
            })
          );    

    console.log(this.newUsers);
    console.log(this.serviceFlight.searched.ticket_type);
    
  }

  ngOnInit(): void {
  }

}
