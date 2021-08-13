import { Component, OnInit } from '@angular/core';
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
  userImg = faUserAlt;
  basketImg = faShoppingCart;

  constructor() {}

  ngOnInit(): void {}
}
