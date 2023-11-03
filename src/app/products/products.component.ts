import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products?: IProduct[]

  constructor(private productService: ProductService, private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      console.log(`Loaded ${products.length} products`)
      this.products = products;
    })

    console.log('ProductsComponent ngOnInit')
  }

  addToCart(id: number) {
    this.cartService.add(id)
  }

  edit(id: number) {
    this.router.navigate([`products/edit/${id}`])
  }
}
