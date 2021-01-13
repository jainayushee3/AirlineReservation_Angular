import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Passenger } from '../models/Passenger';
import { Seats } from '../models/Seats';
import { Ticket } from '../models/Ticket';
import { FlightSearch } from '../services/flightsearch.services';
import { TicketBooking } from '../services/TicketBooking.services';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm:FormGroup;
  receipt_id:any;
  seat_id:any
  ticket:Ticket
  seatsData:Seats[]=[]
  s:Seats=new Seats
  PassengerArray:Passenger[]=[]
  secondReceipt:Ticket

  constructor(private serviceObject:FlightSearch, private router:Router, private ticketService:TicketBooking) {
    this.checkoutForm= new FormGroup({
      name:new FormControl('',Validators.required),
      card_number:new FormControl('',[Validators.required,Validators.pattern('[0-9-]*')]),
      expiry_month:new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.min(1),Validators.max(12)]),
      expiry_year:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.min(2021),Validators.max(2026)]),
      cvv:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(3)])
    });

    this.ticket=new Ticket()
    this.secondReceipt= new Ticket()
    console.log("in add")
    this.ticket.userid=sessionStorage.getItem('user');
    this.ticket.sid=this.serviceObject.searched.Selected_Schedule_ID;
    this.ticket.not=this.serviceObject.searched.number_of_passengers;
    this.ticket.ticstatus="Booked";
    this.ticket.triptype="one";
    this.ticket.otherri=null;
    this.ticket.total=this.serviceObject.searched.amount; 

    this.secondReceipt.userid=sessionStorage.getItem('user');
    this.secondReceipt.sid=this.serviceObject.searched.Return_Selected_Schedule_ID;
    this.secondReceipt.not=this.serviceObject.searched.number_of_passengers;    
    this.secondReceipt.ticstatus="Booked";
    this.secondReceipt.triptype="two";
    this.secondReceipt.otherri=null;
    this.secondReceipt.total=this.serviceObject.searched.amount;
    this.s= new Seats()
   }

   get f(){
    return this.checkoutForm.controls;
  }

  ngOnInit(): void {
  }

  onProceed(){     
    
    if(this.serviceObject.searched.ticket_type=="one")
    {
      this.ticket.otherri=null;
      this.BookOne(); 
      this.serviceObject.searched.payment="done"
   
    this.router.navigate(["/tickets"])
    }
    else
    {
      //call post of two way
    this.BookOne();
    this.BookTwo();
    this.serviceObject.searched.payment="done"
    this.router.navigate(["/twowaytickets"])
    }

  }
  BookOne() {
    this.ticketService.addTicket(this.ticket).subscribe(
      (u: any) => {
      console.log(u);
      
      this.serviceObject.searched.Selected_Seats.forEach(element => {
      this.s.receiptid=u[0];
      this.s.seatclass=this.serviceObject.searched.Selected_Class;
      this.s.seatno=element;
      this.s.seatstatus="Booked"
      this.s.sid=this.serviceObject.searched.Selected_Schedule_ID
    
      this.ticketService.addSeats(this.s).subscribe(
        (u: any)=> {
          console.log(u)

          

          
          for (let index = 0; index < this.serviceObject.passengerData["contacts"].length; index++) {
            let element = this.serviceObject.passengerData['contacts'][index];
            console.log(element);
            element.userid=sessionStorage.getItem('user');
            console.log(element.userid);
            
            element.SeatID=u[index];

            this.ticketService.addPassenger(element).subscribe(
              ( u: any) => console.log(u)
              
            )
            
          }
      });

      }
      )
    });
  }
  BookTwo() {
    this.ticketService.addTicket(this.secondReceipt).subscribe(  
      (u: any) => {
      console.log(u);
      
      this.serviceObject.searched.Selected_Seats.forEach(element => {
      this.s.receiptid=u[0];
      this.s.seatclass=this.serviceObject.searched.Selected_Class;
      this.s.seatno=element;
      this.s.seatstatus="Booked"
      this.s.sid=this.serviceObject.searched.Return_Selected_Schedule_ID
    
      this.ticketService.addSeats(this.s).subscribe(
        (s: any)=> {
          console.log(s)

          for (let index = 0; index < this.serviceObject.passengerData["contacts"].length; index++) {
            let element = this.serviceObject.passengerData['contacts'][index];
            console.log(element);
            element.userid=sessionStorage.getItem('user');
            console.log(element.userid);
            
            element.SeatID=u[index];

            this.ticketService.addPassenger(element).subscribe(
              ( pass: any) => {
                console.log(pass)
              
               }
              
            )
            
          }
      });

      }
      )
    });
   
  }

}
