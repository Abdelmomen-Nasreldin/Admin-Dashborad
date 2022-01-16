import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductAPI } from '../models/product-api'

@Injectable({
  providedIn: 'root'
})
export class ProductsFromAPIService {

  private httpOptions={};
  constructor(private httpClient: HttpClient) {
    localStorage.setItem('AccessToken','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGViNGE1ZTRlMjZlN2Y2MjVjYTIyNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzAyMzczNiwiZXhwIjoxNjM3MjgyOTM2fQ.rErePjoBJpU2FrU1-_21ZTZubV0CurzFRFr4PNJ4HYM')
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      , 'token':/*this.accessTokenForAdmin*/localStorage['AccessToken']
      })//.set('token', localStorage.AccessToken)
    }
  }

 getAllProducts():Observable<ProductAPI[]>
 {
   // return this.httpClient.get<Product[]>(environment.APIURL + '/getproducts');
   return this.httpClient.get<ProductAPI[]>(environment.APIURL + '/products');

 }

 getProductByID(pID: string):Observable<ProductAPI>
 {
   return this.httpClient.get<ProductAPI>(environment.APIURL + '/products/find/' +pID);
 }

 getProductByCatName(cName: string):Observable<ProductAPI[]>
 {
   return this.httpClient.get<ProductAPI[]>(environment.APIURL + '/products?category=' +cName);
 }
 deleteProductByID(pID: string):Observable<ProductAPI>
 {
   return this.httpClient.delete<ProductAPI>(environment.APIURL + '/products/delete/' +pID,this.httpOptions);
 }

/*
 insertProduct(newPrd: ProductAPI):Observable<any>
 {
  //this.httpClient.post(environment.APIURL + '/products',newPrd);
  return this.httpClient.post(`${environment.APIURL}/products`,JSON.stringify(newPrd),this.httpOptions);

 }
*/
}
