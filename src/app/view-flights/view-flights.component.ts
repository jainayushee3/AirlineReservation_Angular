import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-view-flights',
  templateUrl: './view-flights.component.html',
  styleUrls: ['./view-flights.component.css']
})
export class ViewFlightsComponent implements OnInit {
  flights:any;

  constructor(private flightService:FlightService,private router:Router) { 
    this.flightService.getAllFlightFromApi().subscribe((f: any)=>{this.flights=f;})
  }

  ngOnInit(): void {
  }
}
