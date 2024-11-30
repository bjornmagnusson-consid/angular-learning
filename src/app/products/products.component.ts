import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products?: IProduct[]
  filteredProducts: IProduct[] = []
  category: string = ''

  constructor(
    private productService: ProductService, 
    private cartService: CartService,
    private categoryService: CategoriesService,
    private router: Router) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products
      console.log(`Loaded ${this.products.length} products`)
      this.filteredProducts = this.getFilteredProducts()
    })

    console.log('ProductsComponent ngOnInit')
  }

  addToCart(id: number) {
    this.cartService.add(id)
  }

  edit(id: number) {
    this.router.navigate([`products/edit/${id}`])
  }

  getTitle(product: IProduct): string {
    if (product.category !== null) {
      return `${product.category.name} - ${product.name}`
    }
    return product.name
  }

  filter() {
    this.categoryService.getCategories().subscribe(categories => {
      let random = Math.floor(Math.random() * categories.length);
      this.category = categories.map(category => category.name)[random]
      this.filteredProducts = this.getFilteredProducts();
    })
  }    


  private getFilteredProducts(): IProduct[] {
    return this.filteredProducts = this.products?.filter(product => {
      if (this.category.length > 0) {
        return product.category !== null && product.category.name === this.category;
      }
      return true;
    }) as IProduct[];
  }
}
