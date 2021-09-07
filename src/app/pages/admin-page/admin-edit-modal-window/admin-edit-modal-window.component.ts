import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShopDataModel } from 'src/app/models/shop-data-model';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-admin-edit-modal-window',
  templateUrl: './admin-edit-modal-window.component.html',
  styleUrls: ['./admin-edit-modal-window.component.less'],
})
export class AdminEditModalWindowComponent implements OnInit {
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      id: string;
      product: {
        img: string;
        title: string;
        kindName: string;
        price: number;
        description: string;
        origin: string;
        weight: string;
      };
    },
    public fb: FormBuilder,
    public productService: ProductService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.options = this.fb.group({
      title: new FormControl(this.data.product.title),
      kindName: new FormControl(this.data.product.kindName),
      price: new FormControl(this.data.product.price),
      origin: new FormControl(this.data.product.origin),
      weight: new FormControl(this.data.product.weight),
      description: new FormControl(this.data.product.description),
    });
  }

  onSubmit() {
    let updateProduct = {
      id: this.data.id,
      product: {
        img: this.data.product.img,
        ...this.options.value,
      },
    };
    this.productService.updateProduct(updateProduct);
    this.matDialog.closeAll();
  }
}
