import { Component, Input, OnInit } from '@angular/core';
import { ReceivedSchedule } from '../models/ReceivedSchedule';
import { UserSearch } from '../models/usersearch';
import { FlightSearch } from '../services/flightsearch.services';


@Component({
  selector: 'app-flightfrom',
  templateUrl: './flightfrom.component.html',
  styleUrls: ['./flightfrom.component.css']
})
export class FlightfromComponent implements OnInit {
  @Input()twoWay:ReceivedSchedule;
  constructor(public serviceObject:FlightSearch) { 
    this.twoWay= new ReceivedSchedule();
    console.log(this.twoWay);
  }

  ngOnInit(): void {
  }

  onCheckEC(){
    let isSelectedChecBox = <HTMLInputElement>document.getElementById("selected_flt_EC")
    if(isSelectedChecBox.checked == true)
    {
      this.serviceObject.searched.Return_Selected_Schedule_ID=this.twoWay.Schedule_ID
      this.serviceObject.searched.Return_Selected_Class="EC"
      
      
      this.serviceObject.searched.Return_Selected_Price=this.twoWay.Price_EC 
      this.serviceObject.selectedReturnSchedule=this.twoWay;
    }
     
  }

  onCheckBC(){
    let isSelectedChecBox = <HTMLInputElement>document.getElementById("selected_flt_BC")
    if(isSelectedChecBox.checked == true)
    {
      this.serviceObject.searched.Return_Selected_Schedule_ID=this.twoWay.Schedule_ID
      this.serviceObject.searched.Return_Selected_Class="BC"
      this.serviceObject.searched.Return_Selected_Price=this.twoWay.Price_BC      
      this.serviceObject.selectedReturnSchedule=this.twoWay;

    }
     
  }
  onCheckFC(){
    let isSelectedChecBox = <HTMLInputElement>document.getElementById("selected_flt_FC")
    if(isSelectedChecBox.checked == true)
    {
      this.serviceObject.searched.Return_Selected_Schedule_ID=this.twoWay.Schedule_ID
      this.serviceObject.searched.Return_Selected_Class="FC"
      this.serviceObject.searched.Return_Selected_Price=this.twoWay.Price_FC 
      this.serviceObject.selectedReturnSchedule=this.twoWay;
    }
  }

}
