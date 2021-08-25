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
  searchImg = faSearch;
  basketImg = faShoppingCart;
  userImg = faUserAlt;
  constructor() {}

  isTablet: boolean = false;
  isMobile: boolean = false;
  ngOnInit(): void {
    this.isTablet = this.tabletSize(window.innerWidth);
    this.isMobile = this.mobileSize(window.innerWidth);
  }

  tabletSize = (width: number) => (width <= 768 && width >= 480 ? true : false);

  mobileSize = (width: number) => (width <= 480 ? true : false);

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const innerWith: number = event.target.innerWidth;
    this.isTablet = this.tabletSize(innerWith);

    this.isMobile = this.mobileSize(innerWith);
  }
}
