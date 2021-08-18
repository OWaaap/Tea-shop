import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesItemComponent } from './accessories-item/accessories-item.component';
import { AccessoriesMainContentComponent } from './accessories-main-content/accessories-main-content.component';

const routes: Routes = [
  {
    path: '',
    component: AccessoriesMainContentComponent,
  },
  {
    path: 'product-page/:id',
    component: AccessoriesItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessoriesShopRoutingModule {}