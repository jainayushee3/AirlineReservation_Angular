import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
import { FlightSearch } from '../services/flightsearch.services';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  passengers: any;
  amount:number;
  name = 'Angular';
  myVar1 = false;
  myVar2 = false;
  popup=false;
  @ViewChild('content')
  content!: ElementRef;

  payment()
  {
    this.popup=false;
  }

  constructor(public passengerService:FlightSearch) {

    
    for (let index = 0; index < this.passengerService.passengerData.length; index++) {
      this.passengers.Push(this.passengerService.passengerData[index]);
      
    }
    console.log(this.passengerService.passengerData);
    
    console.log(this.passengers)
    // this.passengerService.selectedSchedule.Dep_Time
    this.amount= (this.passengerService.searched.number_of_passengers * this.passengerService.searched.Selected_Price);

    this.passengerService.searched.amount=this.amount;
   }

   SavePDF(){
    var element = <HTMLInputElement>document.getElementById('ticketContent');

    html2canvas(element).then((canvas)=>{
      var imgData = canvas.toDataURL('img/png')
      var doc= new jspdf();
      doc.addImage(imgData,10,10,208,300)

      doc.save("Tickets.pdf")

    })

   }

  ngOnInit(): void {
  }

}
