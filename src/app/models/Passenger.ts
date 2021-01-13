export class Passenger{
  userid:any;
  Name:string;
  Age:number; 
  SeatID!:number; 
  constructor(Name:string="",
    Age:number=0){
    this.Name=Name;
    this.Age=Age;
   
  }
}
