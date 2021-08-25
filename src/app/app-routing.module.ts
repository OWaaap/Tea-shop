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
      import('./pages/teas-shop-page/teas-shop.module').then(
        (module) => module.TeasShopModule
      ),
  },
  {
    path: 'accessories',
    loadChildren: () =>
      import('./pages/accessories-shop-page/accessories-shop.module').then(
        (module) => module.AccessoriesShopModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact-page/contact.module').then(
        (module) => module.ContactModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login-page/login.module').then(
        (module) => module.LoginPageModule
      ),
  },
  {
    path: 'basket',
    loadChildren: () =>
      import('./pages/basket-page/basket-page.module').then(
        (module) => module.BasketPageModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin-page/admin-page.module').then(
        (module) => module.AdminPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
