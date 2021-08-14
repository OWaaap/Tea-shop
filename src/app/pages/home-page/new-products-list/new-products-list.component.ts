import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-products-list',
  templateUrl: './new-products-list.component.html',
  styleUrls: ['./new-products-list.component.less'],
})
export class NewProductsListComponent implements OnInit {
  products = [
    {
      productImg: '../../../assets/img/product1.jpeg',
      productName: 'Hibiscus Flower',
      productPrice: '$8.00',
    },
    {
      productImg: '../../../assets/img/product1.jpeg',
      productName: 'Hibiscus Flower',
      productPrice: '$7.00',
    },
    {
      productImg: '../../../assets/img/product1.jpeg',
      productName: 'Hibiscus Flower',
      productPrice: '$5.00',
    },
    {
      productImg: '../../../assets/img/product1.jpeg',
      productName: 'Hibiscus Flower',
      productPrice: '$7.00',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
