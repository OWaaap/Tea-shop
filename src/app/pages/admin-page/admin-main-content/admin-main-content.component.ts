import { Component, OnInit } from '@angular/core';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/models/product';
import { AdminEditModalWindowComponent } from '../admin-edit-modal-window/admin-edit-modal-window.component';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin-main-content',
  templateUrl: './admin-main-content.component.html',
  styleUrls: ['./admin-main-content.component.less'],
  providers: [ProductService],
})
export class AdminMainContentComponent implements OnInit {
  displayedColumns: string[] = [
    'img',
    'title',
    'kindName',
    'price',
    'description',
    'origin',
    'weight',
    'edit',
    'delete',
  ];
  deleteIcon = faTrashAlt;
  editIcon = faEdit;

  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) {}

  openDialog(product: Product): void {
    const dialogRef = this.dialog.open(AdminEditModalWindowComponent, {
      maxWidth: '1100px',
      data: product,
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  deleteProduct(id: string) {
    console.log(id);
    this.productService.deleteProduct(id);
  }

  products: Product[];
  ngOnInit(): void {
    this.productService.getData('teas').subscribe((data) => {
      this.products = data.map((item) => {
        return {
          id: item.payload.doc.id,
          ...(item.payload.doc.data() as Product),
        } as Product;
      });
    });
  }
}
