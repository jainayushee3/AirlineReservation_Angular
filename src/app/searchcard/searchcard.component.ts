import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserSearch } from '../models/usersearch';
import { FlightSearch } from '../services/flightsearch.services';

@Component({
  selector: 'app-searchcard',
  templateUrl: './searchcard.component.html',
  styleUrls: ['./searchcard.component.css']
})
export class SearchcardComponent implements OnInit {

  source: string[];
  destination: string[];
  dateToday = new Date();

  constructor(public serviceFlight:FlightSearch, private router:Router ) { 
    this.source= [];
    this.destination=[];
 
  }

  ngOnInit(): void {
    this.serviceFlight.getSource().subscribe(
      (u:any) => u.forEach((element:any) => {
        this.source.push(element)        
      })
    );
    this.serviceFlight.getDestination().subscribe(
      (u:any) => u.forEach((element:any) => {
        this.destination.push(element)        
      })
    );
  }

  onSubmit()
  {
    // this.serviceFlight.getSchedule(this.serviceFlight.user. departure_date, this.serviceFlight.user.source_loc, this.serviceFlight.user.destination).subscribe(
    //   (u:any) => u.forEach((element:any) => {
    //     console.log(element)    
    //   })
    // );
    if(this.serviceFlight.searched.number_of_passengers==undefined)
    alert("Passengers can't be empty")

    else if(this.serviceFlight.searched.Destination == this.serviceFlight.searched.Source_Loc)
    alert("Cannot have same source and destination");

    else if(this.serviceFlight.searched.Dep_Date == undefined)
    alert("Departure date must be selected");    
    
    else{
      if(this.serviceFlight.searched.ticket_type=="two")
    {
      this.router.navigate(["/flightstwo"]);
    }
    else
    this.router.navigate(["/flights"]);  

  }
    
    console.log(this.serviceFlight.searched.number_of_passengers);
  }

  

}
