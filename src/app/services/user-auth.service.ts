import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Iuser } from './../models/iuser';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  public isLogged=false;
  private token:any;

  constructor(private httpClient:HttpClient,private router:Router) { }

  login(user:Iuser){
    //call login api and return token

    this.httpClient.post<Iuser>(`${environment.APIURL}/auth/login`,user).subscribe((res)=>{
      console.log(res);
      if(res.isAdmin==true){
        this.token=res.accessToken;
       localStorage.setItem('adminToken',this.token)
        this.isLogged=true;
        this.router.navigate(['/admin/Account/Dashboard'])
      }
    }
    ,(err)=>{console.log(err)})
    //get token
    //let token:string=""
    //localStorage.setItem('adminToken',token)
    //isLogged=true;
  }
  logout(){
    //call logout api and clear token
    localStorage.removeItem('adminToken')
    this.isLogged=false;
    this.router.navigate(['/admin/auth'])
  }
  isLoggedIn():Boolean{
    console.log("hi",this.isLogged);
    return this.isLogged;
  }
}
