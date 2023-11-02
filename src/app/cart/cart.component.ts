import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { ICart } from './cart.model';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: ICart = {products: []}

  constructor(private cartService: CartService, private productService: ProductService) {}

  ngOnInit() {
    this.cartService.get().subscribe(cart => {
      this.cart = cart
    })
  }

  add(id: number) {
    this.cartService.add(id)
    let products = this.cart?.products
    products.forEach(cartItem => {
      if (cartItem.productId === id) {
        cartItem.number++
      }
    })
  }    

  remove(id: number) {
    this.cartService.delete(id);
    let products = this.cart?.products
    let isZero: boolean = false
    products.forEach(cartItem => {
      if (cartItem.productId === id) {
        cartItem.number--
        if (cartItem.number === 0) {
          isZero = true
        }
      }
    })
    if (isZero) {
      let newProducts = products.filter((product, _) => product.number > 0)
      this.cart.products = newProducts
    }
  }

  getNumberOfItems(): number {
    let number = 0
    this.cart.products.forEach(cartItem => {
      number += cartItem.number
    })
    return number
  }
}
