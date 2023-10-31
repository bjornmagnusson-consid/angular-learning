import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products?: IProduct[]

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      console.log(`Loaded ${products.length} products`)
      this.products = products;
    })

    console.log('ProductsComponent ngOnInit')
  }

  addToCart(product: IProduct) {
    this.cartService.add(product)
  }
}
