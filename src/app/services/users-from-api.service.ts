import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserAPI } from '../models/user-api';
import { UserStats } from '../models/user-stats';

@Injectable({
  providedIn: 'root'
})
export class UsersFromApiService {
  private httpOptions = {};
  //private accessTokenForAdmin:string = ""
  constructor(private httpClient: HttpClient) {
    localStorage.setItem('AccessToken','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGViNGE1ZTRlMjZlN2Y2MjVjYTIyNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzAyMzczNiwiZXhwIjoxNjM3MjgyOTM2fQ.rErePjoBJpU2FrU1-_21ZTZubV0CurzFRFr4PNJ4HYM')
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      , 'token':/*this.accessTokenForAdmin*/localStorage['AccessToken']
      })//.set('token', localStorage.AccessToken)
    }
}

getAllUsers(): Observable <UserAPI[] >
{
  // return this.httpClient.get<Product[]>(environment.APIURL + '/getproducts');
  return this.httpClient.get<UserAPI[]>(environment.APIURL + '/users',this.httpOptions);

}

getIUserByID(uID: string): Observable <UserAPI >
{
  return this.httpClient.get<UserAPI>(environment.APIURL + '/users/find/' + uID,this.httpOptions);
}

getUserStats(): Observable <UserStats>
{
  return this.httpClient.get<UserStats>(environment.APIURL + '/users/stats',this.httpOptions);
}
deleteUserByID(uID: string): Observable <UserAPI >
{
  return this.httpClient.delete<UserAPI>(environment.APIURL + '/users/delete/' + uID,this.httpOptions);
}
/*
 insertProduct(newPrd: ProductAPI):Observable<any>
 {
  //this.httpClient.post(environment.APIURL + '/products',newPrd);
  return this.httpClient.post(`${environment.APIURL}/products`,JSON.stringify(newPrd),this.httpOptions);

 }
*/
}
