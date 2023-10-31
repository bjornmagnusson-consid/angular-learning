import { Component } from '@angular/core';
import { IProduct } from '../products/product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart?: IProduct[]

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cart = this.cartService.cart
  }
}
