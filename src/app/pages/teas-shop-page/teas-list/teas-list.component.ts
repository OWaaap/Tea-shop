import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShopDataModel } from 'src/app/models/shop-data-model';

@Component({
  selector: 'app-teas-list',
  templateUrl: './teas-list.component.html',
  styleUrls: ['./teas-list.component.less'],
})
export class TeasListComponent implements OnInit {
  // products = [
  //   {
  //     id: '1',
  //     kindName: 'Black tea',
  //     description: 'An original fragrance composed of Ceylon black tea... ',
  //     img: 'https://firebasestorage.googleapis.com/v0/b/tea-shop-23dcd.appspot.com/o/images%20of%20tea%20products%2FBruxelles-une-Fois.png?alt=media&token=eb65d869-96c8-4c12-b59f-9fc1cafa5ca9',
  //     origin: 'Sri-Lanka',
  //     price: '11,90',
  //     title: 'Bruxelles, une Fois',
  //     weight: '100',
  //   },
  //   {
  //     id: '2',
  //     kindName: 'Black tea',
  //     description: 'A prestigious black Ceylon tea high-grown... ',
  //     img: 'https://firebasestorage.googleapis.com/v0/b/tea-shop-23dcd.appspot.com/o/images%20of%20tea%20products%2FCeylon-Black-Pepper-Malaysia.png?alt=media&token=cb4a2ff4-e07f-4ba7-8291-852e98653e0c',
  //     origin: 'Sri-Lanka',
  //     price: '14,50',
  //     title: 'Ceylon Black Pepper Malaysia',
  //     weight: '100',
  //   },
  //   {
  //     id: '3',
  //     kindName: 'Black tea',
  //     description: 'This organically grown tea...',
  //     img: 'https://firebasestorage.googleapis.com/v0/b/tea-shop-23dcd.appspot.com/o/images%20of%20tea%20products%2FCeylon-OP-Blackwood-Organic.png?alt=media&token=097c4435-9de7-4093-aab2-a89a58f8d2a2',
  //     origin: 'Sri-Lanka',
  //     price: '15,50',
  //     title: 'Ceylon OP Blackwood Organic',
  //     weight: '100',
  //   },
  //   {
  //     id: '4',
  //     kindName: 'Black tea',
  //     description: 'Intentionally produced in small quantities... ',
  //     img: 'https://firebasestorage.googleapis.com/v0/b/tea-shop-23dcd.appspot.com/o/images%20of%20tea%20products%2FChina-Keemun-Grande-Recolte-Organic.png?alt=media&token=98c2a5d8-1278-45be-b02f-cdc379cedf77',
  //     origin: 'China',
  //     price: '12,90',
  //     title: 'China Keemun Grande Récolte Organic',
  //     weight: '100',
  //   },
  //   {
  //     id: '5',
  //     kindName: 'Black tea',
  //     description: 'One of the most prestigious teas...',
  //     img: 'https://firebasestorage.googleapis.com/v0/b/tea-shop-23dcd.appspot.com/o/images%20of%20tea%20products%2FChina-Yunnan-Celeste-Organic.png?alt=media&token=df10bad7-baf1-432e-99cc-1fc080a6346a',
  //     origin: 'China',
  //     price: '19,90',
  //     title: 'China Yunnan Céleste Organic',
  //     weight: '100',
  //   },
  //   {
  //     id: '6',
  //     kindName: 'Black tea',
  //     description: 'A subtle and exquisite blend of sensual...',
  //     img: 'https://firebasestorage.googleapis.com/v0/b/tea-shop-23dcd.appspot.com/o/images%20of%20tea%20products%2FCinnamon.png?alt=media&token=aa302561-23f6-4d5c-b62b-22559dc3db7a',
  //     origin: 'Sri-Lanka',
  //     price: '11,90',
  //     title: 'Cinnamon',
  //     weight: '100',
  //   },
  //   {
  //     id: '7',
  //     kindName: 'Green tea',
  //     description: 'This organically grown Long Jing (Dragon Well)..',
  //     img: 'https://firebasestorage.googleapis.com/v0/b/tea-shop-23dcd.appspot.com/o/images%20of%20tea%20products%2FBaltic-Organic.png?alt=media&token=ed3f76f3-7ac8-470c-840e-a5843254c70f',
  //     origin: 'China',
  //     price: '13,90',
  //     title: 'Baltic Organic',
  //     weight: '100',
  //   },
  //   {
  //     id: '8',
  //     kindName: 'Green tea',
  //     description: 'This Japanese Sencha green tea is characterized...',
  //     img: 'https://firebasestorage.googleapis.com/v0/b/tea-shop-23dcd.appspot.com/o/images%20of%20tea%20products%2FBruxelles-deux-fois.png?alt=media&token=f353f8bc-e886-4629-8d43-839ee5f765a3',
  //     origin: 'Japan',
  //     price: '16,90',
  //     title: 'Bruxelles, deux fois!',
  //     weight: '100',
  //   },
  //   {
  //     id: '9',
  //     kindName: 'Green tea',
  //     description: 'Discover this elegant Chinese green tea recipe...',
  //     img: 'https://firebasestorage.googleapis.com/v0/b/tea-shop-23dcd.appspot.com/o/images%20of%20tea%20products%2FCasablanca.png?alt=media&token=b6599203-c896-4ab7-8fda-5f5d7fc61827',
  //     origin: 'China',
  //     price: '13,90',
  //     title: 'Casablanca',
  //     weight: '100',
  //   },
  //   {
  //     id: '10',
  //     kindName: 'Green tea',
  //     description: 'This high-grown tea is solely...',
  //     img: 'https://firebasestorage.googleapis.com/v0/b/tea-shop-23dcd.appspot.com/o/images%20of%20tea%20products%2FGu-Zhang-Mao-Jian.png?alt=media&token=b98165fa-1154-42b3-903f-6d56a23d85e1',
  //     origin: 'China',
  //     price: '15,80',
  //     title: 'China Gu Zhang Mao Jian',
  //     weight: '100',
  //   },
  // ];
  constructor() {}
  @Input() data: ShopDataModel[];

  // getById(id: string): Product | undefined {
  //   return this.products.find((el) => el.id === id);
  // }
  ngOnInit(): void {}
}
