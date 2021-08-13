import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactMainContentComponent } from './contact-main-content/contact-main-content.component';

const routes: Routes = [
  {
    path: '',
    component: ContactMainContentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
