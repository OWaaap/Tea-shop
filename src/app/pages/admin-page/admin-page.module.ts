import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminMainContentComponent } from './admin-main-content/admin-main-content.component';
import { MaterialModule } from 'src/app/common-modules/material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminEditModalWindowComponent } from './admin-edit-modal-window/admin-edit-modal-window.component';

@NgModule({
  declarations: [AdminMainContentComponent, AdminEditModalWindowComponent],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    MaterialModule,
    FontAwesomeModule,
  ],
})
export class AdminPageModule {}
