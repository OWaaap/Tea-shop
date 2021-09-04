import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-teas-item',
  templateUrl: './teas-item.component.html',
  styleUrls: ['./teas-item.component.less'],
})
export class TeasItemComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService
  ) {}
  data: any;
  ngOnInit(): void {
    const id: string = this.activateRoute.snapshot.params['id'];
    console.log(id);
    this.productService.getProduct('teas', id).subscribe((data) => {
      this.data = data;
    });
  }
}
