import { Injectable } from '@angular/core';
import { IPost } from './post.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts() : Observable<IPost[]> {
    return of([
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
      },
      {
        title: "Hello World4",
        body: "First blog post4"
      }
    ])
  }
}
