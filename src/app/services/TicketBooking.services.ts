import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Passenger } from "../models/Passenger";
import { Seats } from "../models/Seats";
import { Ticket } from "../models/Ticket";

@Injectable()
export class TicketBooking{

  

  constructor(private postHttp:HttpClient)
  {}

  public addSeats(seats:Seats):any{
    console.log("ïnseats");
    console.log(seats);
    
    return this.postHttp.post("http://localhost:64160/api/BookSeats",seats);

  }
  public addTicket(ticket:Ticket):any{
    console.log(ticket);
    
    return this.postHttp.post("http://localhost:64160/api/BookTickets",ticket);
  }
  public addPassenger(passengers:Passenger):any{
    console.log(passengers);
    
        return this.postHttp.post("http://localhost:64160/api/BookPassengers",passengers);
  }
}