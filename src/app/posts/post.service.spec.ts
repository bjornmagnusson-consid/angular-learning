import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostService } from './post.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IPost } from './post.model';
import { of, throwError } from 'rxjs';

describe('PostService', () => {
  let service: PostService;
  let httpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });    
    httpClient = jasmine.createSpyObj('HttpClient', ['get']);
    service = new PostService(httpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve posts', () => {
    const testData: IPost[] = [
      {id: 1, title: 'title1', body: 'body1'},
      {id: 2, title: 'title2', body: 'body2'},
      {id: 3, title: 'title3', body: 'body3'}
    ];
    httpClient.get.and.returnValue(of(testData));

    let postsFromApi: IPost[] = [];
    service.getPosts().subscribe(posts => {
      postsFromApi = posts;
    })

    expect(postsFromApi.length).toBe(testData.length);
  })

  it('should retrieve no posts upon failure', () => {
    httpClient.get.and.returnValue(throwError(() => {
        const error: HttpErrorResponse = new HttpErrorResponse({
          status: 504,
          statusText: 'Gateway timeout',
          error: 'Failure occured when calling /api/posts',
          url: '/api/posts'
        });
        return error
      }
    ))
    service.getPosts().subscribe(posts => expect(posts.length).toBe(0))
  })

  it('should retrieve post', () => {
    const testData: IPost = {id: 10, title: 'title', body: 'body'}
    httpClient.get.and.returnValue(of(testData));

    let postFromApi!: IPost;
    service.getPost(10).subscribe(post => {
      postFromApi = post;
    })
    expect(postFromApi.id).toBe(testData.id);
    expect(postFromApi.title).toBe(testData.title);
    expect(postFromApi.body).toBe(testData.body);
  })
});
