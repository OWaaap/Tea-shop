import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeasMainContantComponent } from './teas-main-contant/teas-main-contant.component';

const routes: Routes = [
  {
    path: '',
    component: TeasMainContantComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeasShopRoutingModule {}
