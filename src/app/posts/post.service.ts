import { Injectable } from '@angular/core';
import { IPost } from './post.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() : Observable<IPost[]> {
    console.log('PostService getPosts')
    return this.http.get<IPost[]>('/api/posts')
  }

  getPost(id: Number) : Observable<IPost> {
    console.log('PostService getPost ' + id)
    return this.http.get<IPost>('/api/posts/' + id)
  }
}
