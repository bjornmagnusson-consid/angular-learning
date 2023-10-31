import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { PostComponent } from './posts/post.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: "posts", component: PostsComponent },
  { path: 'posts/:id', component: PostComponent },
  { path: "products", component: ProductsComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'home', component: HomeComponent },
  { path: "cart", component: CartComponent },
  { path: '**', component: HomeComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
