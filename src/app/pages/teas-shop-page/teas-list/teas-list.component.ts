import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

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
      productImg:
        'https://firebasestorage.googleapis.com/v0/b/tea-shop-23dcd.appspot.com/o/images%20of%20tea%20products%2FBruxelles-une-Fois.png?alt=media&token=eb65d869-96c8-4c12-b59f-9fc1cafa5ca9',
    },
    {
      id: 2,
      productName: 'Hibiscus Flower',
      productPrice: '$7.00',
      productImg:
        'https://firebasestorage.googleapis.com/v0/b/tea-shop-23dcd.appspot.com/o/images%20of%20tea%20products%2FBruxelles-une-Fois.png?alt=media&token=eb65d869-96c8-4c12-b59f-9fc1cafa5ca9',
    },
    {
      id: 3,
      productName: 'Hibiscus Flower',
      productPrice: '$7.00',
      productImg:
        'https://firebasestorage.googleapis.com/v0/b/tea-shop-23dcd.appspot.com/o/images%20of%20tea%20products%2FBruxelles-une-Fois.png?alt=media&token=eb65d869-96c8-4c12-b59f-9fc1cafa5ca9',
    },
    {
      id: 4,
      productName: 'Hibiscus Flower',
      productPrice: '$7.00',
      productImg:
        'https://firebasestorage.googleapis.com/v0/b/tea-shop-23dcd.appspot.com/o/images%20of%20tea%20products%2FBruxelles-une-Fois.png?alt=media&token=eb65d869-96c8-4c12-b59f-9fc1cafa5ca9',
    },
    {
      id: 5,
      productName: 'Hibiscus Flower',
      productPrice: '$7.00',
      productImg:
        'https://firebasestorage.googleapis.com/v0/b/tea-shop-23dcd.appspot.com/o/images%20of%20tea%20products%2FBruxelles-une-Fois.png?alt=media&token=eb65d869-96c8-4c12-b59f-9fc1cafa5ca9',
    },
    {
      id: 6,
      productName: 'Hibiscus Flower',
      productPrice: '$7.00',
      productImg:
        'https://firebasestorage.googleapis.com/v0/b/tea-shop-23dcd.appspot.com/o/images%20of%20tea%20products%2FBruxelles-une-Fois.png?alt=media&token=eb65d869-96c8-4c12-b59f-9fc1cafa5ca9',
    },
    {
      id: 7,
      productName: 'Hibiscus Flower',
      productPrice: '$7.00',
      productImg:
        'https://firebasestorage.googleapis.com/v0/b/tea-shop-23dcd.appspot.com/o/images%20of%20tea%20products%2FBruxelles-une-Fois.png?alt=media&token=eb65d869-96c8-4c12-b59f-9fc1cafa5ca9',
    },
    {
      id: 8,
      productName: 'Hibiscus Flower',
      productPrice: '$7.00',
      productImg:
        'https://firebasestorage.googleapis.com/v0/b/tea-shop-23dcd.appspot.com/o/images%20of%20tea%20products%2FBruxelles-une-Fois.png?alt=media&token=eb65d869-96c8-4c12-b59f-9fc1cafa5ca9',
    },
    {
      id: 9,
      productName: 'Hibiscus Flower',
      productPrice: '$7.00',
      productImg:
        'https://firebasestorage.googleapis.com/v0/b/tea-shop-23dcd.appspot.com/o/images%20of%20tea%20products%2FBruxelles-une-Fois.png?alt=media&token=eb65d869-96c8-4c12-b59f-9fc1cafa5ca9',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
