import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessoriesShopRoutingModule } from './accessories-shop-routing.module';
import { AccessoriesListComponent } from './accessories-list/accessories-list.component';
import { AccessoriesItemComponent } from './accessories-item/accessories-item.component';
import { AccessoriesMainContentComponent } from './accessories-main-content/accessories-main-content.component';

@NgModule({
  declarations: [
    AccessoriesListComponent,
    AccessoriesItemComponent,
    AccessoriesMainContentComponent,
  ],
  imports: [CommonModule, AccessoriesShopRoutingModule],
})
export class AccessoriesShopModule {}
