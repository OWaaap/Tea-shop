import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketPageRoutingModule } from './basket-page-routing.module';
import { BasketMainContentComponent } from './basket-main-content/basket-main-content.component';
import { MaterialModule } from 'src/app/common-modules/material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [BasketMainContentComponent],
  imports: [
    CommonModule,
    BasketPageRoutingModule,
    FontAwesomeModule,
    MaterialModule,
  ],
})
export class BasketPageModule {}
