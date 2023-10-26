import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { IProduct } from './product.model';
import { AppConfig } from '../app-config.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private config: AppConfig) { }

  getProducts() : Observable<IProduct[]> {
    console.log('ProductService getProducts')
    return this.http.get<IProduct[]>(this.config.getApiUrl('/api/products')).pipe(
      catchError(() => of([]))
    )
  }

  getProduct(id: Number) : Observable<IProduct> {
    console.log('ProductService getProduct ' + id)
    return this.http.get<IProduct>(this.config.getApiUrl('/api/products/' + id))
  }
}
