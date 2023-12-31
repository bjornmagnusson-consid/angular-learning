import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MatToolbarModule, MatDividerModule, RouterModule, AppRoutingModule]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render menu items', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    const menuItems = compiled.getElementsByTagName('a');
    expect(menuItems.length).toBe(4)
    const home = menuItems.item(0);
    expect(home?.textContent).toContain('Home')
    const catalog = menuItems.item(1);
    expect(catalog?.textContent).toContain('Catalog')
    const products = menuItems.item(2);
    expect(products?.textContent).toContain('Product')
    const cart = menuItems.item(3);
    expect(cart?.textContent).toContain('Cart')
  })
});
