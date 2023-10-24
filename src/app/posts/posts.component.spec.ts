import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PostsComponent } from './posts.component';
import { PostService } from './post.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClient } from '@angular/common/http';
import { IPost } from './post.model';
import { of } from 'rxjs';
import { MatListModule } from '@angular/material/list';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let postService: PostService;
  let route: ActivatedRoute;
  let httpClient: jasmine.SpyObj<HttpClient>;
  let testData: IPost[] = [
    {id: 1, title: 'title1', body: 'body1'},
    {id: 2, title: 'title2', body: 'body2'},
    {id: 3, title: 'title3', body: 'body3'}
  ];

  beforeEach(() => {
    httpClient = jasmine.createSpyObj('HttpClient', ['get']);
    httpClient.get.and.returnValue(of(testData));
    TestBed.configureTestingModule({
      declarations: [PostsComponent],
      imports: [HttpClientTestingModule, AppRoutingModule, RouterModule, MatListModule],
      providers: [{provide: PostService, useValue: new PostService(httpClient)}]
    });
    route = TestBed.inject(ActivatedRoute);
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    postService = fixture.debugElement.injector.get(PostService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load posts', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    const postLinks = compiled.getElementsByTagName('a');
    expect(postLinks?.length).toBe(testData.length);
    const post1 = postLinks.item(0);
    expect(post1?.textContent).toContain('title1')
    const post2 = postLinks.item(1);
    expect(post2?.textContent).toContain('title2')
    const post3 = postLinks.item(2);
    expect(post3?.textContent).toContain('title3')
  })
});
