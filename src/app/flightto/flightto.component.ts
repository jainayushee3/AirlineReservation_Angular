import { Component, Input, OnInit } from '@angular/core';
import { ReceivedSchedule } from '../models/ReceivedSchedule';

import { FlightSearch } from '../services/flightsearch.services';

@Component({
  selector: 'app-flightto',
  templateUrl: './flightto.component.html',
  styleUrls: ['./flightto.component.css']
})
export class FlighttoComponent implements OnInit {
  @Input()oneWay:ReceivedSchedule;
  selectedFlights: any;
  // @Output()
  constructor(private serviceObject:FlightSearch) { 
    this.oneWay= new ReceivedSchedule();
    console.log(this.oneWay);
  }

  ngOnInit(): void {
  }

  onCheckEC(){
    let isSelectedChecBox = <HTMLInputElement>document.getElementById("selected_flt_EC")
    if(isSelectedChecBox.checked == true)
    {
      this.serviceObject.searched.Selected_Schedule_ID=this.oneWay.Schedule_ID
      this.serviceObject.searched.Selected_Class="EC"
      console.log(this.serviceObject.searched.Selected_Class);
      this.serviceObject.searched.Selected_Price=this.oneWay.Price_EC 
      this.serviceObject.selectedSchedule=this.oneWay;
    }
     
  }

  onCheckBC(){
    let isSelectedChecBox = <HTMLInputElement>document.getElementById("selected_flt_BC")
    if(isSelectedChecBox.checked == true)
    {
      this.serviceObject.searched.Selected_Schedule_ID=this.oneWay.Schedule_ID
      this.serviceObject.searched.Selected_Class="BC"
      console.log(this.serviceObject.searched.Selected_Class);
      this.serviceObject.searched.Selected_Price=this.oneWay.Price_BC    
      this.serviceObject.selectedSchedule=this.oneWay;  
      
    }
     
  }
  onCheckFC(){
    let isSelectedChecBox = <HTMLInputElement>document.getElementById("selected_flt_FC")
    if(isSelectedChecBox.checked == true)
    {
      this.serviceObject.searched.Selected_Schedule_ID=this.oneWay.Schedule_ID
      this.serviceObject.searched.Selected_Class="FC"
      console.log(this.serviceObject.searched.Selected_Class);
      this.serviceObject.searched.Selected_Price=this.oneWay.Price_FC 
      this.serviceObject.selectedSchedule=this.oneWay;
    }
     
  }
 


}
