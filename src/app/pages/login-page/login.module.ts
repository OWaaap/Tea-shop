import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginMainContentComponent } from './login-main-content/login-main-content.component';
import { LoginPageRoutingModule } from './login-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LoginMainContentComponent],
  imports: [CommonModule, LoginPageRoutingModule, FontAwesomeModule],
})
export class LoginPageModule {}
