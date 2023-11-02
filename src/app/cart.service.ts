import { Injectable } from '@angular/core';
import { IProduct } from './products/product.model';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from './app-config.service';
import { ICart } from './cart/cart.model';
import { ProductService } from './products/product.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private httpClient: HttpClient, private config: AppConfig, private productService: ProductService) {}

  get(): Observable<ICart> {
    return this.httpClient.get<ICart>('/api/cart')
  }

  add(id: number) {
    this.httpClient.get<IProduct>(this.config.getApiUrl(`/api/products/${id}`)).subscribe(product => {
      this.httpClient.post(this.config.getApiUrl('/api/cart/products'), product).subscribe(() => {
        console.log(`Added product (id=${product.id}, name=${product.name}) to cart`)
      })      
    })    
  }

  delete(id: number) {
    this.httpClient.delete(this.config.getApiUrl(`/api/cart/products/${id}`)).subscribe()
    console.log(`Removed product with id ${id} from cart`)
  }
}
