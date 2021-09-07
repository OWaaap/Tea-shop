import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabinetPageRoutingModule } from './cabinet-page-routing.module';
import { CabinetMainContentComponent } from './cabinet-main-content/cabinet-main-content.component';
import { MaterialModule } from 'src/app/common-modules/material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CabinetNewUserDataComponent } from './cabinet-new-user-data/cabinet-new-user-data.component';
import { FormsModule } from '@angular/forms';
import { OrderHistoryComponent } from './order-history/order-history.component';

@NgModule({
  declarations: [
    CabinetMainContentComponent,
    CabinetNewUserDataComponent,
    OrderHistoryComponent,
  ],
  imports: [
    CommonModule,
    CabinetPageRoutingModule,
    MaterialModule,
    FontAwesomeModule,
    FormsModule,
  ],
})
export class CabinetPageModule {}
