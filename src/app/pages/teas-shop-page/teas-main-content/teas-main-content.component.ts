import { Component, OnInit } from '@angular/core';
import { ShopDataModel } from 'src/app/models/shop-data-model';
import { ProductService } from 'src/app/service/product.service';
import { Category } from 'src/app/models/category';
// import * as data from '../../../../assets/test.json';

@Component({
  selector: 'app-teas-main-contant',
  templateUrl: './teas-main-content.component.html',
  styleUrls: ['./teas-main-content.component.less'],
})
export class TeasMainContantComponent implements OnInit {
  constructor(private productService: ProductService) {}

  products: ShopDataModel[];
  data: ShopDataModel[];
  categorys: Category[];

  sortTeas(category: Category) {
    this.data = this.products.filter(
      (item) =>
        item.product.kindName.toLowerCase() === category.name.toLowerCase()
    );
  }
  ngOnInit(): void {
    this.productService.getData('teas').subscribe((data) => {
      this.products = data.map((item) => {
        return {
          id: item.payload.doc.id,
          ...(item.payload.doc.data() as ShopDataModel),
        } as ShopDataModel;
      });
      this.data = this.products;
    });
    this.productService.getData('categories').subscribe((data) => {
      this.categorys = data.map((item) => {
        return {
          ...(item.payload.doc.data() as Category),
        } as Category;
      });
    });
  }
}
