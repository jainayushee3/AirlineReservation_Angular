import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PassengerDetailsComponent } from '../passenger-details/passenger-details.component';
import { FlightSearch } from '../services/flightsearch.services';

@Component({
  selector: 'app-passengers-details',
  templateUrl: './passengers-details.component.html',
  styleUrls: ['./passengers-details.component.css']
})
export class PassengersDetailsComponent implements OnInit {

  passengerDetailForm!: FormGroup;
  contact:number=1;
  
  get contactsArray(): FormArray{
    return this.passengerDetailForm.get('contacts') as FormArray
  } 

  constructor(public flightService:FlightSearch, private router:Router) {    
   }

  ngOnInit(): void {
    this.generateForm();
  }

  public addContact(){
    console.log(this.flightService.searched.number_of_passengers);

    
    if(this.contact<this.flightService.searched.number_of_passengers)
    {
    this.contactsArray.push(PassengerDetailsComponent.addPassengerItem());
    this.contact++;
    console.log(this.contact)
    console.log(this.flightService.searched.number_of_passengers);
    }
    else
    alert("Already added")
    
  }

  public generateForm(){
    this.passengerDetailForm = new FormGroup({
      contacts: new FormArray([
        PassengerDetailsComponent.addPassengerItem()
      ])
    });
  }

  public submitDetails(){
    //console.log(this.passengerDetailForm.value)
    this.flightService.passengerData=this.passengerDetailForm.value;
    console.log((this.flightService.passengerData))
    // console.log(this.flightService.passengerData["contacts"][0])
    // console.log(Object.keys(this.flightService.passengerData["contacts"]))

    // this.flightService.passengerData["contacts"].forEach((contact:any) => {
    //   console.log(contact);      
    //   console.log("name "+contact["Name"]);
    //   console.log("age  "+contact["Email"]);    
      
    //   this.flightService.passengerData.push(contact)
    //   console.log(this.flightService.passengerData)
    //   //new Passenger(contact["Name"], contact["Email"])

    
    // });

    for (let index = 0; index < this.flightService.passengerData["contacts"].length; index++) {
      const element = this.flightService.passengerData['contacts'][index];
      console.log(element);
      this.flightService.passengersData.push(element)
    }
    // console.log(this.flightService.passengersData);

    

    if(this.contact!=this.flightService.searched.number_of_passengers)
    {
    alert("All passenger details have not been entered")
    
    }
    else
    {

      //console.log( this.contactsArray()[0].value.name);
      
     
    
    
      this.router.navigate(["/seatselection"]); 
    
    }
  }

}
