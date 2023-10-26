import { Injectable } from '@angular/core';
import { IPost } from './post.model';
import { Observable, catchError, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { AppConfig } from '../app-config.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private config: AppConfig) { }

  getPosts() : Observable<IPost[]> {
    console.log('PostService getPosts')
    return this.http.get<IPost[]>(this.config.getApiUrl('/api/posts')).pipe(
      catchError(() => of([]))
    )
  }

  getPost(id: Number) : Observable<IPost> {
    console.log('PostService getPost ' + id)
    return this.http.get<IPost>(this.config.getApiUrl('/api/posts/' + id))
  }
}
