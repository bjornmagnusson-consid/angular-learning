import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuItems: MenuItem[] = [
    {link: 'home', text: 'Home'},
    {link: 'posts', text: 'Posts'},
    {link: 'products', text: 'Products'},
    {link: 'cart', text: 'Cart'}
  ]
}

export interface MenuItem {
  link: string,
  text: string
}
