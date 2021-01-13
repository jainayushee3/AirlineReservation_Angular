import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Passenger } from "../models/Passenger";
import { ReceivedSchedule } from "../models/ReceivedSchedule";
import { UserSearch } from "../models/usersearch";

@Injectable()
export class FlightSearch{

  searched:UserSearch;
  passengers:Passenger;
  selected:UserSearch;
  passengerData:Passenger[]=[];
  passengersData:Passenger[]=[];
  selectedSchedule:ReceivedSchedule;
  selectedReturnSchedule:ReceivedSchedule;
  

 
  constructor(private httpClient:HttpClient){
    this.searched= new UserSearch();
    this.passengers=new Passenger();
    this.selected= new UserSearch();
    this.selectedSchedule= new ReceivedSchedule();
    this.selectedReturnSchedule= new ReceivedSchedule();
  }

  public getSource(){
    return this.httpClient.get("http://localhost:64160/api/Flight/Source");
  }

  public getDestination(){
      return this.httpClient.get("http://localhost:64160/api/Flight/Destination");
    }

  public getSchedule(date:any, source:any, destination:any){
      return this.httpClient.get("http://localhost:64160/api/FlightSearch/Schedule?date="+date+"&source="+source+"&destination="+destination);
    }

    public getReturnSchedule(date:any, source:any, destination:any){
      return this.httpClient.get("http://localhost:64160/api/FlightSearch/ReturnSchedule?date="+date+"&source="+source+"&destination="+destination);

    }

    // public getPrices(sid:any){
    //   return this.httpClient.get("http://localhost:64160/api/FlightSearch/ReturnPrice?Schedule_ID="+sid);
    // }

    public getBookedSeats(id:number)
    {
        console.log("get")
        return this.httpClient.get("http://localhost:64160/api/Flight/GetSeats?id="+id)
    }
}