import{HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from '../models/Flight.Models';


@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http:HttpClient) { }
  public getAllFlightFromApi(){
    return this.http.get("http://localhost:64160/api/tblFlight_Details");
}
public addFlightFromApi(flight:Flight){
    return this.http.post("http://localhost:64160/api/tblFlight_Details",flight);
}
public updateFlightFromApi(id:number,flight:Flight){
    return this.http.put("http://localhost:64160/api/tblFlight_Details/"+id,flight);
}
public getOneFlightFromApi(id:number){
    return this.http.get("http://localhost:64160/api/tblFlight_Details/"+id);
}
public deleteFlightFromApi(id:number){
  return this.http.delete("http://localhost:64160/api/tblFlight_Details/"+id);
}

}
