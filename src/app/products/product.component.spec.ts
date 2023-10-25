import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent],
      imports:[HttpClientModule, AppRoutingModule]
    });
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
