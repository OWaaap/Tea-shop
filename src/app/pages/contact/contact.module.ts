import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactMainContentComponent } from './contact-main-content/contact-main-content.component';

@NgModule({
  declarations: [ContactMainContentComponent],
  imports: [CommonModule, ContactRoutingModule],
})
export class ContactModule {}
