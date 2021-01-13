import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightSearch } from '../services/flightsearch.services';

@Component({
  selector: 'app-seatselection',
  templateUrl: './seatselection.component.html',
  styleUrls: ['./seatselection.component.css']
})
export class SeatselectionComponent implements OnInit {
  seats1:seat[]=[]
  seats2:seat[]=[]
  seats3:seat[]=[]
  check:boolean=false;
  check1:boolean=false;
  check2:boolean=false;
  list:any
  list2:any
  list3:any
  seatsselected:number=0;
  alert:boolean=false
  
  constructor(private seatsservice:FlightSearch, private router:Router) { 
    this.getSeats();   

    if(this.seatsservice.searched.Selected_Class=="FC")
    {
      this.disablebc();
      this.disableec();
    }
    else if(this.seatsservice.searched.Selected_Class=="BC")
    {
      this.disablefc();
      this.disableec();
    }
    else{
      this.disablebc();
      this.disablefc();
    }

    this.seatsservice.getBookedSeats(this.seatsservice.searched.Selected_Schedule_ID).subscribe((bookedseats:any)=>{    
      console.log(bookedseats);
      bookedseats.forEach((element:string) => 
      {
        //console.log("forloop");
        this.seats1.forEach((item:any)=>
        {
          if(item.name==element)
              item.status=true;
        }
        )    
      
      
      this.seats2.forEach((item:any)=>
      {
        if(item.name==element)
            item.status=true;
      }
      ) 
      
      this.seats3.forEach((item:any)=>
        {
          if(item.name==element)
              item.status=true;
        }
        )    
      
    });
    })

  }
  
disablefc()
{
  if(this.check==false)
  {
    this.check=true;
  }
  else{
    this.check=false;
  }
}
disableec()
{
  if(this.check2==false)
  {
    this.check2=true;
  }
  else{
    this.check2=false;
  }
}
disablebc()
{
  if(this.check1==false)
  {
    this.check1=true;
  }
  else{
    this.check1=false;
  }
}
getSeats()
{
this.seats1=[
  {id:"1A",name:"1A",isSelected:false,status:false},
  {id:"1B",name:"1B",isSelected:false,status:false},
  {id:"1C",name:"1C",isSelected:false,status:false},
  {id:"1D",name:"1D",isSelected:false,status:false},
  {id:"1E",name:"1E",isSelected:false,status:false},
  {id:"1F",name:"1F",isSelected:false,status:false},

  {id:"2A",name:"2A",isSelected:false,status:false},
  {id:"2B",name:"2B",isSelected:false,status:false},
  {id:"2C",name:"2C",isSelected:false,status:false},
  {id:"2D",name:"2D",isSelected:false,status:false},
  {id:"2E",name:"2E",isSelected:false,status:false},
  {id:"2F",name:"2F",isSelected:false,status:false},

  {id:"3A",name:"3A",isSelected:false,status:false},
  {id:"3B",name:"3B",isSelected:false,status:false},
  {id:"3C",name:"3C",isSelected:false,status:false},
  {id:"3D",name:"3D",isSelected:false,status:false},
  {id:"3E",name:"3E",isSelected:false,status:false},
  {id:"3F",name:"3F",isSelected:false,status:false}
]
this.seats2=[
  {id:"5A",name:"5A",isSelected:false,status:false},
  {id:"5B",name:"5B",isSelected:false,status:false},
  {id:"5C",name:"5C",isSelected:false,status:false},
  {id:"5D",name:"5D",isSelected:false,status:false},
  {id:"5E",name:"5E",isSelected:false,status:false},
  {id:"5F",name:"5F",isSelected:false,status:false},

  {id:"6A",name:"6A",isSelected:false,status:false},
  {id:"6B",name:"6B",isSelected:false,status:false},
  {id:"6C",name:"6C",isSelected:false,status:false},
  {id:"6D",name:"6D",isSelected:false,status:false},
  {id:"6E",name:"6E",isSelected:false,status:false},
  {id:"6F",name:"6F",isSelected:false,status:false},

  {id:"7A",name:"7A",isSelected:false,status:false},
  {id:"7B",name:"7B",isSelected:false,status:false},
  {id:"7C",name:"7C",isSelected:false,status:false},
  {id:"7D",name:"7D",isSelected:false,status:false},
  {id:"7E",name:"7E",isSelected:false,status:false},
  {id:"7F",name:"7F",isSelected:false,status:false}
]
this.seats3=[
  {id:"9A",name:"9A",isSelected:false,status:false},
  {id:"9B",name:"9B",isSelected:false,status:false},
  {id:"9C",name:"9C",isSelected:false,status:false},
  {id:"9D",name:"9D",isSelected:false,status:false},
  {id:"9E",name:"9E",isSelected:false,status:false},
  {id:"9F",name:"9F",isSelected:false,status:false},

  {id:"10A",name:"10A",isSelected:false,status:false},
  {id:"10B",name:"10B",isSelected:false,status:false},
  {id:"10C",name:"10C",isSelected:false,status:false},
  {id:"10D",name:"10D",isSelected:false,status:false},
  {id:"10E",name:"10E",isSelected:false,status:false},
  {id:"10F",name:"10F",isSelected:false,status:false},

  {id:"11A",name:"11A",isSelected:false,status:false},
  {id:"11B",name:"11B",isSelected:false,status:false},
  {id:"11C",name:"11C",isSelected:false,status:false},
  {id:"11D",name:"11D",isSelected:false,status:false},
  {id:"11E",name:"11E",isSelected:false,status:false},
  {id:"11F",name:"11F",isSelected:false,status:false}
]

}
onChange()
{
  //console.log(this.seats1);
  this.seatsselected++;
  if(this.seatsselected==this.seatsservice.searched.number_of_passengers)
  {
  alert("Booked required number of seats")
  this.alert=true
  }
}



onsubmit()
{
 

this.list=this.seats1.filter(x=>x.isSelected==true).map(x=>x.name).join(",").toString();
this.list2=this.seats2.filter(x=>x.isSelected==true).map(x=>x.name).join(",").toString();
this.list3=this.seats3.filter(x=>x.isSelected==true).map(x=>x.name).join(",").toString();
var arr1= this.list.split(',');console.log(arr1);

var arr2= this.list2.split(',');console.log(arr2);

var arr3= this.list3.split(',');console.log(arr3);


if(this.seatsservice.searched.Selected_Class=="FC"){
  this.seatsservice.searched.Selected_Seats=arr1;
  //console.log("in if"); 
}
else {
  //console.log("in else");
  
  if(this.seatsservice.searched.Selected_Class=="BC")
  this.seatsservice.searched.Selected_Seats=arr2;
  else if(this.seatsservice.searched.Selected_Class=="EC")
  this.seatsservice.searched.Selected_Seats=arr3;
}

this.seatsservice.searched.Selected_Seats.forEach(element => {

for (let index = 0; index < this.seatsservice.passengerData["contacts"].length; index++) {
  const el = this.seatsservice.passengerData['contacts'][index];
 
   el.seat_id= element;
   console.log(element);   
 
  // this.seatsservice.passengersData.push(element)
}
});

//console.log(this.seatsservice.searched.Selected_Seats)
if(this.seatsservice.searched.ticket_type=="one")
this.router.navigate(['/tickets']);
else
this.router.navigate(['/twowaytickets']);
}
ngOnInit(): void {
 
}
}

class seat{
id:string="";
name:string="";
  isSelected!: boolean;
  status!: boolean;
}