import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';

import { AdminRoutingModule } from './admin-routing.module';

import { ProductsListModule } from './productmgmt/productslist/productlist.module';
import { ProductDetailModule } from './productmgmt/productdetail/productdetail.module';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ProductsListModule,
    ProductDetailModule
  ],
  declarations: [
    AdminComponent
  ]
})
export class AdminModule {}
