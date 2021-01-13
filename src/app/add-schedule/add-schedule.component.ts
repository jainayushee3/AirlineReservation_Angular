import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Schedule } from '../models/Schedule.Models';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {

  schedule:Schedule;
  constructor(private scheduleService:ScheduleService, private router:Router) {
    this.schedule=new Schedule();
   }

   InsertSchedule(){
     this.scheduleService.addScheduleFromApi(this.schedule)
     .subscribe(data=>console.log(data));
     alert('Added new schedule');
    this.router.navigate(["Schedules"]);
   }
  ngOnInit(): void {
  }

}
