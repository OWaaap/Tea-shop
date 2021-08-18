import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teas-list',
  templateUrl: './teas-list.component.html',
  styleUrls: ['./teas-list.component.less'],
})
export class TeasListComponent implements OnInit {
  teasList = [
    {
      id: 1,
      productName: 'Hibiscus Flower',
      productPrice: '$7.00',
      productImg: '../../../../assets/img/product1.jpeg',
    },
    {
      id: 2,
      productName: 'Hibiscus Flower',
      productPrice: '$7.00',
      productImg: '../../../../assets/img/product1.jpeg',
    },
    {
      id: 3,
      productName: 'Hibiscus Flower',
      productPrice: '$7.00',
      productImg: '../../../../assets/img/product1.jpeg',
    },
    {
      id: 4,
      productName: 'Hibiscus Flower',
      productPrice: '$7.00',
      productImg: '../../../../assets/img/product1.jpeg',
    },
    {
      id: 5,
      productName: 'Hibiscus Flower',
      productPrice: '$7.00',
      productImg: '../../../../assets/img/product1.jpeg',
    },
    {
      id: 6,
      productName: 'Hibiscus Flower',
      productPrice: '$7.00',
      productImg: '../../../../assets/img/product1.jpeg',
    },
    {
      id: 7,
      productName: 'Hibiscus Flower',
      productPrice: '$7.00',
      productImg: '../../../../assets/img/product1.jpeg',
    },
    {
      id: 8,
      productName: 'Hibiscus Flower',
      productPrice: '$7.00',
      productImg: '../../../../assets/img/product1.jpeg',
    },
    {
      id: 9,
      productName: 'Hibiscus Flower',
      productPrice: '$7.00',
      productImg: '../../../../assets/img/product1.jpeg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
