import { Component, OnInit } from '@angular/core';
import {
  faLongArrowAltLeft,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-basket-main-content',
  templateUrl: './basket-main-content.component.html',
  styleUrls: ['./basket-main-content.component.less'],
})
export class BasketMainContentComponent implements OnInit {
  basketTableColumns: string[] = ['img', 'info', 'delete', 'quantity', 'price'];
  infoTableColumns: string[] = ['title', 'quantity', 'price'];

  deleteIcon = faTrashAlt;
  backIcon = faLongArrowAltLeft;
  products = [
    {
      id: '1',
      kindName: 'Black tea',
      description: 'An original fragrance composed of Ceylon black tea... ',
      img: 'https://firebasestorage.googleapis.com/v0/b/tea-shop-23dcd.appspot.com/o/images%20of%20tea%20products%2FBruxelles-une-Fois.png?alt=media&token=eb65d869-96c8-4c12-b59f-9fc1cafa5ca9',
      origin: 'Sri-Lanka',
      price: '11,90',
      title: 'Bruxelles, une Fois',
      weight: '100',
      quantity: 1,
    },
    {
      id: '2',
      kindName: 'Black tea',
      description: 'A prestigious black Ceylon tea high-grown... ',
      img: 'https://firebasestorage.googleapis.com/v0/b/tea-shop-23dcd.appspot.com/o/images%20of%20tea%20products%2FCeylon-Black-Pepper-Malaysia.png?alt=media&token=cb4a2ff4-e07f-4ba7-8291-852e98653e0c',
      origin: 'Sri-Lanka',
      price: '14,50',
      title: 'Ceylon Black Pepper Malaysia',
      weight: '100',
      quantity: 1,
    },
    {
      id: '3',
      kindName: 'Black tea',
      description: 'This organically grown tea...',
      img: 'https://firebasestorage.googleapis.com/v0/b/tea-shop-23dcd.appspot.com/o/images%20of%20tea%20products%2FCeylon-OP-Blackwood-Organic.png?alt=media&token=097c4435-9de7-4093-aab2-a89a58f8d2a2',
      origin: 'Sri-Lanka',
      price: '15,50',
      title: 'Ceylon OP Blackwood Organic',
      weight: '100',
      quantity: 1,
    },
  ];

  totalCost: string = '30.10';
  constructor() {}

  removeProduct(id: string) {
    let test: number;
    this.products = this.products.filter((product) => product.id !== id);
    console.log(this.products);
  }
  ngOnInit(): void {}
  ngOnChanges() {
    console.log(45);
  }
}
