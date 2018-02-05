import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShowproductsComponent } from '../showproducts/showproducts.component';


import { RouterModule, Routes } from '@angular/router';




@NgModule({
  imports: [
    CommonModule,
    FormsModule
    , RouterModule
  ],
  declarations: [
    ShowproductsComponent
  ],

  exports: [
    RouterModule
  ],
  providers: [  ]
})
export class ShowProductModule {}
