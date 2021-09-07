import { Component, OnInit } from '@angular/core';
import {
  faLongArrowAltLeft,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { ShopDataModel } from 'src/app/models/shop-data-model';

@Component({
  selector: 'app-basket-main-content',
  templateUrl: './basket-main-content.component.html',
  styleUrls: ['./basket-main-content.component.less'],
})
export class BasketMainContentComponent implements OnInit {
  basketTableColumns: string[] = ['img', 'info', 'delete', 'quantity', 'price'];
  infoTableColumns: string[] = ['title', 'price'];

  deleteIcon = faTrashAlt;
  backIcon = faLongArrowAltLeft;
  products: ShopDataModel[];
  totalCost: number = 0;
  constructor() {}

  removeProduct(id: string) {
    let busketProducts = [];
    busketProducts = JSON.parse(localStorage.getItem('basketProducts') || '[]');

    busketProducts = busketProducts.filter(
      (product: ShopDataModel) => product.id != id
    );
    this.products = busketProducts;
    this.totalCost = 0;
    this.products.forEach((item) => (this.totalCost += +item.product.price));
    localStorage.setItem('basketProducts', JSON.stringify(busketProducts));
  }
  ngOnInit(): void {
    this.totalCost = 0;
    this.products = JSON.parse(localStorage.getItem('basketProducts') || '[]');
    this.products.forEach((item) => (this.totalCost += +item.product.price));
  }
}
