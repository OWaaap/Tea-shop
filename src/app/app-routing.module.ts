import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home-page/home-page.module';
import { MainContentComponent } from './pages/home-page/main-content/main-content.component';

const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
  },
  {
    path: 'teas',
    loadChildren: () =>
      import('./pages/teas-shop/teas-shop.module').then(
        (module) => module.TeasShopModule
      ),
  },
  {
    path: 'accessories',
    loadChildren: () =>
      import('./pages/accessories-shop/accessories-shop.module').then(
        (module) => module.AccessoriesShopModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then(
        (module) => module.ContactModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
