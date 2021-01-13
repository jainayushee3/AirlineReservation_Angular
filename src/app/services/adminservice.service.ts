import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class AdminserviceService {
  Url:string;
 


  constructor(private http : HttpClient) { 
    this.Url="http://localhost:64160/api/AdminLogin";
    
  }

  Login(username: string, password :string){
    let parameters = new HttpParams();
    parameters=parameters.append('username',username);
    parameters=parameters.append('password',password);

    return this.http.get(this.Url,{params:parameters});
  }

}
