export class Schedule{
    Schedule_ID:number;
    Flight_ID:number;
    Source_Loc:string;
    Destination:string;
    Dep_Time:string;
    Arr_Time:string;
    Duration:string;
    Dep_Date:string;
    status:string;
    Price_FC:number;
    Price_BC:number;
    Price_EC:number;

    constructor(schedule_id:number=0,flight_id:number=0,source_loc:string="",destintion:string="",
                dep_time:string="",arr_time:string="",duration:string="",dep_date:string="",status:string="",
                Price_FC:number=0.0,Price_BC:number=0.0,Price_EC:number=0.0)
    {
        this.Arr_Time=arr_time;
        this.Dep_Date=dep_date;
        this.Dep_Time=dep_time;
        this.Destination=destintion;
        this.Duration=duration;
        this.Flight_ID=flight_id;
        this.Schedule_ID=schedule_id;
        this.Source_Loc=source_loc;
        this.status=status;
        this.Price_BC=Price_BC;
        this.Price_EC=Price_EC;
        this.Price_FC=Price_FC;
    }

}