import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainTitleLinkComponent } from './main-title-link/main-title-link.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainTitleLinkComponent, HeaderMobileComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {}
