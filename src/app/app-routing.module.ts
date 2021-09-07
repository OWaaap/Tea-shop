import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
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
    canActivate: [AdminGuard],
  },
  {
    path: 'cabinet',
    loadChildren: () =>
      import('./pages/cabinet-page/cabinet-page.module').then(
        (module) => module.CabinetPageModule
      ),
    // canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
