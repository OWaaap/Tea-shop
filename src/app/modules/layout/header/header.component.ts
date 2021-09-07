import { Component, HostListener, OnInit } from '@angular/core';
import {
  faSearch,
  faShoppingCart,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  searchImg = faSearch;
  basketImg = faShoppingCart;
  userImg = faUserAlt;

  isTablet: boolean = false;
  isMobile: boolean = false;

  amountBasketProducts: number;

  tabletSize = (width: number) => (width <= 768 && width >= 480 ? true : false);

  mobileSize = (width: number) => (width <= 480 ? true : false);

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const innerWith: number = event.target.innerWidth;
    this.isTablet = this.tabletSize(innerWith);

    this.isMobile = this.mobileSize(innerWith);
  }
  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('basketProducts') || '[]'));
    this.isTablet = this.tabletSize(window.innerWidth);
    this.isMobile = this.mobileSize(window.innerWidth);
  }
  ngDoCheck() {
    this.amountBasketProducts = JSON.parse(
      localStorage.getItem('basketProducts') || '[]'
    ).length;
  }
}
