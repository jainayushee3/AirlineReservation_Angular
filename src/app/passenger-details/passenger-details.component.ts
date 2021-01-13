import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit { 

  @Input()
  public childForm!: FormGroup ;

  constructor() { }

  static addPassengerItem():FormGroup{
    return new FormGroup({
      Name: new FormControl(''),
      Age: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

}
