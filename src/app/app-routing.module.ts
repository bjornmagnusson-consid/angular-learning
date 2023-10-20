import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { PostComponent } from './posts/post.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: ":id", component: PostComponent },
  { path: "", component: PostsComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
