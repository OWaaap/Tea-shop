import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeasShopRoutingModule } from './teas-shop-routing.module';
import { TeasListComponent } from './teas-list/teas-list.component';
import { TeasItemComponent } from './teas-item/teas-item.component';
import { TeasMainContantComponent } from './teas-main-contant/teas-main-contant.component';

@NgModule({
  declarations: [
    TeasListComponent,
    TeasItemComponent,
    TeasMainContantComponent,
  ],
  imports: [CommonModule, TeasShopRoutingModule],
})
export class TeasShopModule {}
