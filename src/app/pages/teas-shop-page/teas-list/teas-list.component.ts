import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShopDataModel } from 'src/app/models/shop-data-model';

@Component({
  selector: 'app-teas-list',
  templateUrl: './teas-list.component.html',
  styleUrls: ['./teas-list.component.less'],
})
export class TeasListComponent implements OnInit {
  @Input() data: ShopDataModel[];
  constructor() {}
  addToCart(product: ShopDataModel) {
    console.log(product);

    if (localStorage.getItem('basketProducts')) {
      let basketProducts = [];
      basketProducts = JSON.parse(
        localStorage.getItem('basketProducts') || '{}'
      );

      basketProducts.push(product);
      localStorage.setItem('basketProducts', JSON.stringify(basketProducts));
    } else {
      localStorage.setItem('basketProducts', JSON.stringify([product]));
    }
    alert('Your product has been added to the cart!');
  }
  ngOnInit(): void {}
}
