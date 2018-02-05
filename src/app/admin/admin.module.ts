import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';

import { AdminRoutingModule } from './admin-routing.module';

// import { ProductsListModule } from './productmgmt/productslist/productlist.module';
// import { ProductDetailModule } from './productmgmt/productdetail/productdetail.module';

import { ProductService } from '../admin/productmgmt/services/product.service';

import { ProductslistComponent } from './productmgmt/productslist/productslist.component';
import { ProductdetailComponent } from './productmgmt/productdetail/productdetail.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
    // ProductsListModule,
    // ProductDetailModule
  ],
  declarations: [
    AdminComponent,
    ProductslistComponent,
    ProductdetailComponent
  ],

  providers: [ ProductService ]
})
export class AdminModule {}
