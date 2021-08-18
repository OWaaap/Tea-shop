import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessories-list',
  templateUrl: './accessories-list.component.html',
  styleUrls: ['./accessories-list.component.less'],
})
export class AccessoriesListComponent implements OnInit {
  accessoriesList = [
    {
      id: 1,
      productName: 'Classic Tea Pot',
      productPrice: '$20.00',
      productImg: '../../../../assets/img/product2.jpeg',
    },
    {
      id: 2,
      productName: 'Classic Tea Pot',
      productPrice: '$20.00',
      productImg: '../../../../assets/img/product2.jpeg',
    },
    {
      id: 3,
      productName: 'Classic Tea Pot',
      productPrice: '$20.00',
      productImg: '../../../../assets/img/product2.jpeg',
    },
    {
      id: 4,
      productName: 'Classic Tea Pot',
      productPrice: '$20.00',
      productImg: '../../../../assets/img/product2.jpeg',
    },
    {
      id: 5,
      productName: 'Classic Tea Pot',
      productPrice: '$20.00',
      productImg: '../../../../assets/img/product2.jpeg',
    },
    {
      id: 6,
      productName: 'Classic Tea Pot',
      productPrice: '$20.00',
      productImg: '../../../../assets/img/product2.jpeg',
    },
    {
      id: 7,
      productName: 'Classic Tea Pot',
      productPrice: '$20.00',
      productImg: '../../../../assets/img/product2.jpeg',
    },
    {
      id: 8,
      productName: 'Classic Tea Pot',
      productPrice: '$20.00',
      productImg: '../../../../assets/img/product2.jpeg',
    },
    {
      id: 9,
      productName: 'Classic Tea Pot',
      productPrice: '$20.00',
      productImg: '../../../../assets/img/product2.jpeg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
