import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketMainContentComponent } from './basket-main-content/basket-main-content.component';

const routes: Routes = [
  {
    path: '',
    component: BasketMainContentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketPageRoutingModule {}
