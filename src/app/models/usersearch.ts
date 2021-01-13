export class UserSearch{
 
  Schedule_ID: any;
  Flight_ID: any;  
  Source_Loc: any;
  Destination: any;  
  Dep_Time: any;
  Arr_Time: any;
  Duration: any;
  Dep_Date: any;
  status: any;
  ticket_type:any;
  number_of_passengers:any;
  return_date:any;

  Selected_Schedule_ID:any;
  Selected_Class:any;
  Selected_Price:any;

  Class:any;
  Price:any;

  Selected_Seats!:string[];

  Return_Selected_Schedule_ID:any;
  Return_Selected_Class:any;
  Return_Selected_Price:any;

  payment:string="notdone";

  amount:any;

}