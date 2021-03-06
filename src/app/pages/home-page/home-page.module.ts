import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { MainContentComponent } from './main-content/main-content.component';
import { NewProductsListComponent } from './new-products-list/new-products-list.component';

@NgModule({
  declarations: [MainContentComponent, NewProductsListComponent],
  imports: [CommonModule, HomePageRoutingModule],
})
export class HomePageModule {}
