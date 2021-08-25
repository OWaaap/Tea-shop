import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketPageRoutingModule } from './basket-page-routing.module';
import { BasketMainContentComponent } from './basket-main-content/basket-main-content.component';


@NgModule({
  declarations: [
    BasketMainContentComponent
  ],
  imports: [
    CommonModule,
    BasketPageRoutingModule
  ]
})
export class BasketPageModule { }
