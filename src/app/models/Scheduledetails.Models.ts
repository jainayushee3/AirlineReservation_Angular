export class Scheduledetails{
    Schedule_ID:number;
    Class:string;
    Available_Class_Capacity:number;
    Price:number;
    constructor(Schedule_ID:number=0,Class:string="",Available_Class_Capacity:number=0,Price:number=0){
        this.Schedule_ID=Schedule_ID;
        this.Price=Price;
        this.Class=Class;
        this.Available_Class_Capacity=Available_Class_Capacity;
    }
}