import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesMainContentComponent } from './accessories-main-content/accessories-main-content.component';

const routes: Routes = [
  {
    path: '',
    component: AccessoriesMainContentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessoriesShopRoutingModule {}
