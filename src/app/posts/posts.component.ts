import { Component, Input } from '@angular/core';
import { IPost } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts?: IPost[]

  constructor(private postService : PostService) {
  }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      console.log(`Loaded ${posts.length} posts`)
      this.posts = posts;
    })

    console.log('PostsComponent ngOnInit')
  }
}
