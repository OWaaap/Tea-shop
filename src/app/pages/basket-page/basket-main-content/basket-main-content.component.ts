import { Component, OnInit } from '@angular/core';
import {
  faLongArrowAltLeft,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Order } from 'src/app/models/order';
import { ShopDataModel } from 'src/app/models/shop-data-model';
import { ProductService } from 'src/app/service/product.service';

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
  isEmptyBasket = false;
  constructor(private productService: ProductService) {}

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
  buyProducts() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const date = new Date();
    const data: Order = {
      uid: user.uid,
      products: [...this.products],
      date: date.toDateString(),
      price: this.totalCost,
    } as Order;

    this.productService.buyProducts(data);
    this.products = [];
    localStorage.removeItem('basketProducts');
    this.isEmptyBasket = true;
    alert('Your order has been accepted, our manager will contact you!');
  }
  ngOnInit(): void {
    this.totalCost = 0;
    this.products = JSON.parse(localStorage.getItem('basketProducts') || '[]');
    this.products.forEach((item) => (this.totalCost += +item.product.price));

    if (this.products.length == 0) {
      this.isEmptyBasket = true;
    }
  }
}
