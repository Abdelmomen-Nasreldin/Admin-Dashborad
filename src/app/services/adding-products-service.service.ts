import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ProductAPI } from '../models/product-api';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddingProductsServiceService {
  private httpOptions={};
  constructor(private httpClient : HttpClient) {
    localStorage.setItem('AccessToken','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGViNGE1ZTRlMjZlN2Y2MjVjYTIyNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzAyMzczNiwiZXhwIjoxNjM3MjgyOTM2fQ.rErePjoBJpU2FrU1-_21ZTZubV0CurzFRFr4PNJ4HYM')
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      , 'token':/*this.accessTokenForAdmin*/localStorage['AccessToken']
      })//.set('token', localStorage.AccessToken)
    }

  }

  getallCategories():Observable<Category[]>{
   return this.httpClient.get<Category[]>(`${environment.APIURL}/categories`)
  }

 
  insertProduct(newPrd:ProductAPI):Observable<ProductAPI>{
    console.log("new added in Service",newPrd);
    return this.httpClient.post<ProductAPI>(`${environment.APIURL}/products`,newPrd,this.httpOptions)
  }

  uploadimage(file:any){
    const formdata=new FormData();
    formdata.append("image",file);
   // return this.httpClient.post('http://localhost:4000/file',formdata);
       return this.httpClient.post(`${environment.APIURL}/Upload`,formdata);
  }

  uploadImages(files:any){
   const formdata=new FormData();
   for(let index =0; index<files.length;index++)
   { 
     const element= files[index];
     formdata.append('files',element);
   }
  return this.httpClient.post(`${environment.APIURL}/Upload`,formdata);
  }
}
