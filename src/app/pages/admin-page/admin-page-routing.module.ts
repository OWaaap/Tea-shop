import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainContentComponent } from './admin-main-content/admin-main-content.component';

const routes: Routes = [
  {
    path: '',
    component: AdminMainContentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
