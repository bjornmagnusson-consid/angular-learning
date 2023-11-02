import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
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
      catchError(this.handleError)
    )
  }

  getProduct(id: Number) : Observable<IProduct> {
    console.log('ProductService getProduct ' + id)
    return this.http.get<IProduct>(this.config.getApiUrl('/api/products/' + id)).pipe(
      catchError(this.handleError)
    )
  }

  saveProduct(product: IProduct) : Observable<void> {
    console.log('ProductService saveProduct')
    console.log(product)
    if (product.id === undefined) {
      return this.http.put<IProduct>(this.config.getApiUrl('/api/products'), product).pipe(
        catchError(this.handleError)
      )
    }
    return this.http.put<IProduct>(this.config.getApiUrl('/api/products'), product).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) : Observable<any> {
    return of([]);
  }
}
