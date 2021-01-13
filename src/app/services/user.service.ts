import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/user.model';
import { MailPwd } from '../models/reset.model';
import { email } from '../models/email.model';

@Injectable()
export class UserService {

  constructor(private getHttp:HttpClient, private postHttp:HttpClient, private putHttp:HttpClient) { }

  public addUserUsingApi(user:User){
    return this.postHttp.post("http://localhost:64160/api/Login/register",user);
}
  public loginUserUsingApi(user:User){
    return this.getHttp.get("http://localhost:64160/api/Login/login?Email="+ user.Email+"&Password="+user.Password);
  }
  public restPasswordUsingApi(object:MailPwd){

    return this.putHttp.put("http://localhost:64160/api/Reset",object);
  }

  public sendMailUsingApi(obj:email){
     return this.postHttp.post("http://localhost:64160/api/SendMail",obj);
  }
  public loggedin(){
    return !!sessionStorage.getItem('user');
  }
}

