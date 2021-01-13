import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
import { FlightSearch } from '../services/flightsearch.services';

@Component({
  selector: 'app-twowayticket',
  templateUrl: './twowayticket.component.html',
  styleUrls: ['./twowayticket.component.css']
})
export class TwowayticketComponent implements OnInit {

  passengers: any;
  amount:number;

  constructor(public passengerService:FlightSearch) {
    this.passengers=this.passengerService.passengersData
    this.passengerService.selectedSchedule.Dep_Time
    this.amount= (this.passengerService.searched.number_of_passengers * this.passengerService.searched.Selected_Price)+(this.passengerService.searched.number_of_passengers * this.passengerService.searched.Return_Selected_Price);
    this.passengerService.searched.amount=this.amount;
   }

  ngOnInit(): void {
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


}
