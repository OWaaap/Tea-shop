import { Component, OnInit } from '@angular/core';
import {
  faSearch,
  faShoppingCart,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.less'],
})
export class HeaderMobileComponent implements OnInit {
  searchImg = faSearch;
  basketImg = faShoppingCart;
  userImg = faUserAlt;

  isLogined: boolean = false;
  amountBasketProducts: number;

  constructor() {}

  isNavBarOpen: boolean = false;

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.isLogined = true;
    }
  }
  ngDoCheck() {
    this.amountBasketProducts = JSON.parse(
      localStorage.getItem('basketProducts') || '[]'
    ).length;
  }
  showNavList = () => (this.isNavBarOpen = !this.isNavBarOpen);
}
