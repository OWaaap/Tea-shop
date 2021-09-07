import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabinetMainContentComponent } from './cabinet-main-content/cabinet-main-content.component';

const routes: Routes = [
  {
    path: '',
    component: CabinetMainContentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabinetPageRoutingModule {}
