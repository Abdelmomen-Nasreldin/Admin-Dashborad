import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserAPI } from '../models/user-api'
@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private httpClient : HttpClient) { }

  insertUser(user:UserAPI):Observable<UserAPI>{
    console.log("new added in Service",user);
    return this.httpClient.post<UserAPI>(`${environment.APIURL}/auth/register`,user)
  }

  updateUser(userUpdated:UserAPI):Observable<UserAPI>{    
      return this.httpClient.put<UserAPI>(`http://localhost:5000/api/users/edit/6195a31d93c1857a198e5471}`,{username:"Mohamed Ryad"})
  }

  uploadimage(file:any){
    console.log("service file",file)
    const formdata=new FormData();
    formdata.append("image",file);
   // return this.httpClient.post('http://localhost:4000/file',formdata);
       return this.httpClient.post(`${environment.APIURL}/Upload`,formdata);
  }
}
