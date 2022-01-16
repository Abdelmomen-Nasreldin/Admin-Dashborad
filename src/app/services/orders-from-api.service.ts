import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderAPI } from '../models/order-api'

@Injectable({
  providedIn: 'root'
})
export class OrdersFromApiService {
  private httpOptions = {};
  constructor(private httpClient: HttpClient) {
    localStorage.setItem('AccessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGViNGE1ZTRlMjZlN2Y2MjVjYTIyNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzAyMzczNiwiZXhwIjoxNjM3MjgyOTM2fQ.rErePjoBJpU2FrU1-_21ZTZubV0CurzFRFr4PNJ4HYM')
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        , 'token':/*this.accessTokenForAdmin*/localStorage['AccessToken']
      })//.set('token', localStorage.AccessToken)
    }
  }
  getAllOrders(): Observable<OrderAPI[]> {
    // return this.httpClient.get<Product[]>(environment.APIURL + '/getproducts');
    return this.httpClient.get<OrderAPI[]>(environment.APIURL + '/orders',this.httpOptions);

  }
  getOrdersByUserId(userId: string): Observable<OrderAPI[]> {
    return this.httpClient.get<OrderAPI[]>(environment.APIURL + '/orders/find/' + userId,this.httpOptions);
  }
}