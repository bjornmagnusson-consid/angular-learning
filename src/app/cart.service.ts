import { Injectable } from '@angular/core';
import { IProduct } from './products/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: IProduct[] = [];

  constructor() { }

  add(product: IProduct) {
    this.cart.push(product)
    console.log(`Added product (id=${product.id}, name=${product.name}) to cart`)

    console.log(this.cart)
  }
}
