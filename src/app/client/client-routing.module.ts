import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientComponent } from './client.component';

import { ShowproductsComponent } from './showproducts/showproducts.component';



const adminRoutes: Routes = [

      {  path: 'client', component: ClientComponent,
      children: [
        {
          path: '',
          children: [
      {  path: 'showproducts', component: ShowproductsComponent  },
      {  path: '', component: ShowproductsComponent  }
          ]
        }
]}

];


@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
