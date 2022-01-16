import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class DataFromServerService {
  Product!: Product
  category! : Category
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.APIURL + '/Products');
  }

  getProductsByCatID(
    id: number
  ): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      environment.APIURL + '/Products?CategoryID=' + id
    );
  }
  getProductByID(prodID: number): Observable<Product> {
    return this.httpClient.get<Product>(
      environment.APIURL + '/Products/' + prodID
    );
  }
  addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(
      `${environment.APIURL}/Products`, product
    );
  }

  // getCategory(): Observable<Category> {
  //   return this.httpClient.get<Category>(environment.APIURL + '/Category')
  // }
}
