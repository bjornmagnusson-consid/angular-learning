import { Component } from '@angular/core';
import { IPost } from './post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: IPost[]

  constructor() {
    this.posts = [
      {
        title: "Hello World",
        body: "First blog post"
      },
      {
        title: "Hello World2",
        body: "First blog post2"
      },
      {
        title: "Hello World3",
        body: "First blog post3"
      }
    ]
  }
}
