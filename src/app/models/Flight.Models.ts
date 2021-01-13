export class Flight{
    
    Flight_ID:number;
    EC_Capacity:number;
    BC_Capacity:number;
    FC_Capacity:number;
    status:string;

    constructor(Flight_id:number=0,EC_Capacity:number=0,BC_Capacity:number=0,FC_Capacity:number=0,status:string=""){
        this.Flight_ID=Flight_id;
        this.BC_Capacity=BC_Capacity;
        this.EC_Capacity=EC_Capacity;
        this.FC_Capacity=FC_Capacity;
        this.status=status;
    }
    
}