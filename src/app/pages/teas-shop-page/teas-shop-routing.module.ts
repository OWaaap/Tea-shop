import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeasItemComponent } from './teas-item/teas-item.component';
import { TeasMainContantComponent } from './teas-main-contant/teas-main-contant.component';

const routes: Routes = [
  {
    path: '',
    component: TeasMainContantComponent,
  },
  {
    path: 'product-page/:id',
    component: TeasItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeasShopRoutingModule {}
