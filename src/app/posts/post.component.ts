import { Component, Input, numberAttribute } from '@angular/core';
import { IPost } from './post.model';
import { PostService } from './post.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() postDetails?: IPost

  constructor(private postService: PostService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('PostComponent ngOnInit')
 
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(`PostComponent Loading post with id ${postId}`)
    this.postService.getPost(postId).subscribe(post => {
      console.log(`Loaded post with id ${post.id}`)
      this.postDetails = post;
    })
  }
}
