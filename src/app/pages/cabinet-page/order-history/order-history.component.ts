import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.less'],
})
export class OrderHistoryComponent implements OnInit {
  orders: Order[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getData('orders').subscribe((data) => {
      this.orders = data.map((item) => {
        return {
          id: item.payload.doc.id,
          ...(item.payload.doc.data() as Order),
        } as Order;
      });
      console.log(this.orders);
    });
  }
}
