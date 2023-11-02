import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  id!: number

  name: FormControl = new FormControl()
  description: FormControl = new FormControl()

  constructor(
    private productService: ProductService, 
    private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('EditProductComponent ngOnInit')
 
    const idParameter = this.route.snapshot.paramMap.get('id');    
    if (idParameter !== null) {
      const id = Number(idParameter);
      console.log(`EditProductComponent Loading product with id ${id}`)
      this.productService.getProduct(id).subscribe(product => {
        console.log(`Loaded product with id ${product.id}`)
        this.id = product.id
        this.name.setValue(product.name)
        this.description.setValue(product.description)
      })
    }
  }

  save() {
    var updatedProduct = {id: this.id, name: this.name.value, description: this.description.value}
    this.productService.saveProduct(updatedProduct).subscribe()
  }
}
