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
    return this.http.get<IPost[]>('/api/posts')
  }
}
