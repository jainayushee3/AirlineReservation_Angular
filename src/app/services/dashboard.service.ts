import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable()
export class DashboardService {

  constructor(private getHttp:HttpClient,private putHttp:HttpClient){​​}​

    public getUserTickets()
    {
        return this.getHttp.get("http://localhost:64160/api/UserTrips?id="+sessionStorage.getItem('user'))
    }
    public cancelTicket(id:number, user:User)
    {
        return this.putHttp.put("http://localhost:64160/api/Cancel?id="+id,user)
    }

  }