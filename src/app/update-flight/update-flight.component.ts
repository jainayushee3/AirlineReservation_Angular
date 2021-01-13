import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Flight } from '../models/Flight.Models';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {

  flights:any;
  flight:Flight;

  constructor(private flightService:FlightService, private router:Router) { 
    this.flight=new Flight();
    this.flightService.getAllFlightFromApi().subscribe(data=>{this.flights=data;})
  }

  findFlight(fid:any){
    var id=fid.value;
    console.log(fid);
    this.flights.forEach((element: Flight)=>{
      if(element.Flight_ID==id)
        this.flight=element;
    });
  }

  updateFlightData()
   {
     this.flightService.updateFlightFromApi(this.flight.Flight_ID,this.flight).subscribe(msg=>
      console.log("called"));
      alert('Updated Flight Status');
      this.router.navigate(["AdminFlights"]);
   }

  ngOnInit(): void {
  }

}
