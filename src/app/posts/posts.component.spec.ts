import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PostsComponent } from './posts.component';
import { PostService } from './post.service';
import { ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let postService: PostService;
  let route: ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsComponent],
      imports: [HttpClientTestingModule, AppRoutingModule]
    });
    postService = TestBed.inject(PostService);
    route = TestBed.inject(ActivatedRoute);
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
