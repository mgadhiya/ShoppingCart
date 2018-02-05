import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductslistComponent } from '../productslist/productslist.component';

import { ProductService } from '../services/product.service';

import { RouterModule, Routes } from '@angular/router';
// import { ProductDetailRoutingModule } from '../productdetail/productdetail-routing.module';
import { ProductDetailModule } from '../productdetail/productdetail.module';
// import { ProductsListRoutingModule } from '../productslist/productlist-routing.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule
    , RouterModule
  ],
  declarations: [
    ProductslistComponent
  ],

  exports: [
    RouterModule
  ],
  providers: [ ProductService ]
})
export class ProductsListModule {}
