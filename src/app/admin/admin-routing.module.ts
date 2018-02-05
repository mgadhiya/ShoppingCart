import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ProductslistComponent } from './productmgmt/productslist/productslist.component';
import { ProductdetailComponent } from './productmgmt/productdetail/productdetail.component';



const adminRoutes: Routes = [

      {  path: '', component: AdminComponent,
      children: [
        {
          path: '',
          children: [

      {  path: 'products', component: ProductslistComponent  },
      {  path: 'product/:id', component: ProductdetailComponent  },
      {  path: '', component: ProductslistComponent  }
          ]
        }
]}

];


@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
