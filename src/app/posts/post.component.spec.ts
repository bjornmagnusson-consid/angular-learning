import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PostComponent } from './post.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostService } from './post.service';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClient } from '@angular/common/http';
import { IPost } from './post.model';
import { of } from 'rxjs';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let postService: PostService;
  let route: ActivatedRoute;
  let httpClient: jasmine.SpyObj<HttpClient>;
  let testData: IPost = {id: 1, title: 'title', body: 'body'}

  beforeEach(() => {
    httpClient = jasmine.createSpyObj('HttpClient', ['get']);
    httpClient.get.and.returnValue(of(testData));
    TestBed.configureTestingModule({
      declarations: [PostComponent],
      imports: [HttpClientTestingModule, AppRoutingModule, RouterModule],
      providers: [{provide: PostService, useValue: new PostService(httpClient)}]
    });
    route = TestBed.inject(ActivatedRoute);
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    postService = fixture.debugElement.injector.get(PostService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load post', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    const title = compiled.getElementsByTagName('h2');
    expect(title?.length).toBe(1);
    expect(title?.item(0)?.textContent).toEqual(testData.title);
    const body = compiled.getElementsByTagName('p');
    expect(body?.item(0)?.textContent).toEqual(testData.body);
  })
});
