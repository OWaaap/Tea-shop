import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginMainContentComponent } from './login-main-content/login-main-content.component';
import { LoginPageRoutingModule } from './login-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [LoginMainContentComponent],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    FontAwesomeModule,
    FormsModule,
  ],
})
export class LoginPageModule {}
