import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { PostComponent } from './posts/post.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "posts", component: PostsComponent },
  { path: 'posts/:id', component: PostComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
