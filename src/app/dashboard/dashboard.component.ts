import { Component, OnInit } from '@angular/core';
import { Receipt } from '../models/Receipt';
import { User } from '../models/user.model';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  receipts:Receipt[]=[]
  popup = false
  user:User
  
    tid!: number;
    tik:any
  
    constructor(private publicationsservice:DashboardService) { 
      this.user = new User
      this.publicationsservice.getUserTickets().subscribe((a:any)=>{
        this.receipts = a;
        //console.log(this.receipts)
      })
  
      
      
    }
  ngOnInit(): void {
    
  }
  
  cancel(idd:number)
  {
    
   console.log(idd)

  //  this.receipts=this.receipts.filter((item: { Receipt_ID: number; })=> {
  //   console.log(item);
  //    item.Receipt_ID !== idd;});
  
        this.publicationsservice.cancelTicket(idd,this.user).subscribe(
          u => console.log(u) );

        // this.receipts[idd].Tickets_Status='cancelled'

          
        
    
  
   // console.log(this.receipts)
  
  }
}
  