import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { IProduct } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() : Observable<IProduct[]> {
    console.log('ProductService getProducts')
    return this.http.get<IProduct[]>('/api/products').pipe(
      catchError(() => of([]))
    )
  }

  getProduct(id: Number) : Observable<IProduct> {
    console.log('ProductService getProduct ' + id)
    return this.http.get<IProduct>('/api/products/' + id)
  }
}
