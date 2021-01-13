import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ScheduleService } from '../services/schedule.service';


@Component({
  selector: 'app-view-schedules',
  templateUrl: './view-schedules.component.html',
  styleUrls: ['./view-schedules.component.css']
})
export class ViewSchedulesComponent implements OnInit {
  schedules:any;
  constructor(private scheduleService:ScheduleService,private router:Router) { 
    this.scheduleService.getAllScheduleFromApi().subscribe((s: any)=>{this.schedules=s;})
  }

  ngOnInit(): void {
  }

}
