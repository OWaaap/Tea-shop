import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginMainContentComponent } from './login-main-content/login-main-content.component';

const routes: Routes = [
  {
    path: '',
    component: LoginMainContentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
