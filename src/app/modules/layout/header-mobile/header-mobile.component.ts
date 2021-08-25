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
  constructor() {}

  isNavBarOpen: boolean = false;

  ngOnInit(): void {}
  showNavList = () => (this.isNavBarOpen = !this.isNavBarOpen);
}
