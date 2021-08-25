import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeasShopRoutingModule } from './teas-shop-routing.module';
import { TeasListComponent } from './teas-list/teas-list.component';
import { TeasItemComponent } from './teas-item/teas-item.component';
import { TeasMainContantComponent } from './teas-main-content/teas-main-content.component';
import { TeaService } from 'src/app/service/tea.service';

@NgModule({
  declarations: [
    TeasListComponent,
    TeasItemComponent,
    TeasMainContantComponent,
  ],
  imports: [CommonModule, TeasShopRoutingModule],
  providers: [TeaService],
})
export class TeasShopModule {}
