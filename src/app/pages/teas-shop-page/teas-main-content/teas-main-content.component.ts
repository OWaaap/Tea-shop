import { Component, OnInit } from '@angular/core';
import { TeaService } from 'src/app/service/tea.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from 'src/app/models/product';
// import * as data from '../../../../assets/test.json';

@Component({
  selector: 'app-teas-main-contant',
  templateUrl: './teas-main-content.component.html',
  styleUrls: ['./teas-main-content.component.less'],
})
export class TeasMainContantComponent implements OnInit {
  categorys = [
    {
      id: 1,
      title: 'Black Tea',
      img: 'https://mloyvexztott.i.optimole.com/gsZ96cU.e2cJ~4b1ac/w:90/h:auto/q:90/https://www.universduthe.be/wp-content/uploads/2020/03/the%CC%81-noir.png',
    },
    {
      id: 2,
      title: 'Green Tea',
      img: 'https://mloyvexztott.i.optimole.com/gsZ96cU.e2cJ~4b1ac/w:90/h:auto/q:90/https://www.universduthe.be/wp-content/uploads/2020/03/the%CC%81-noir.png',
    },
    {
      id: 3,
      title: 'White tea',
      img: 'https://mloyvexztott.i.optimole.com/gsZ96cU.e2cJ~4b1ac/w:90/h:auto/q:90/https://www.universduthe.be/wp-content/uploads/2020/03/the%CC%81-noir.png',
    },
    {
      id: 4,
      title: 'Jasmin tea',
      img: 'https://mloyvexztott.i.optimole.com/gsZ96cU.e2cJ~4b1ac/w:90/h:auto/q:90/https://www.universduthe.be/wp-content/uploads/2020/03/the%CC%81-noir.png',
    },
    {
      id: 5,
      title: 'Smoked tea',
      img: 'https://mloyvexztott.i.optimole.com/gsZ96cU.e2cJ~4b1ac/w:90/h:auto/q:90/https://www.universduthe.be/wp-content/uploads/2020/03/the%CC%81-noir.png',
    },
    {
      id: 6,
      title: 'Rooibos tea',
      img: 'https://mloyvexztott.i.optimole.com/gsZ96cU.e2cJ~4b1ac/w:90/h:auto/q:90/https://www.universduthe.be/wp-content/uploads/2020/03/the%CC%81-noir.png',
    },
  ];

  constructor(
    private teaService: TeaService,
    private firestore: AngularFirestore
  ) {}
  products: Product[];
  createData(data: any) {
    console.log(data);

    this.firestore.collection('teas').add({ data });
  }
  ngOnInit(): void {
    this.teaService.getData().subscribe((data) => {
      console.log(data);

      // this.teaService.getData().subscribe((data) => {
      //   console.log(data);
      //   this.products = data.map((item) => {
      //     return {
      //       ...(item.payload.doc.data() as Product),
      //     } as Product;
      //   });
      //   console.log(this.products);
    });
    // this.createData(this.teasArr);
  }
}
