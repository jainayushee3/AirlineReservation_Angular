import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../models/Flight.Models';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
  flight:Flight;
  constructor(private flightService:FlightService, private router:Router) { 
    this.flight=new Flight();
  }
  
  InsertFlight(){
    this.flightService.addFlightFromApi(this.flight).subscribe(data=>console.log(data));
    alert('Added new Flight');
    
    this.router.navigate(["AdminFlights"]);
  }
  ngOnInit(): void {
  }

}
