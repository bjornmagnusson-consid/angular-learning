import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductComponent } from './edit-product.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('EditProductComponent', () => {
  let component: EditProductComponent;
  let fixture: ComponentFixture<EditProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProductComponent],
      imports: [HttpClientModule, AppRoutingModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(EditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
