import { Component, Input } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() productDetails?: IProduct

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('PostComponent ngOnInit')
 
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(`PostComponent Loading post with id ${id}`)
    this.productService.getProduct(id).subscribe(product => {
      console.log(`Loaded post with id ${product.id}`)
      this.productDetails = product;
    })
  }
}
