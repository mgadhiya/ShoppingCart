import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductdetailComponent } from '../productdetail/productdetail.component';

import { ProductService } from '../services/product.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ProductdetailComponent
  ],
  providers: [ ProductService ]
})
export class ProductDetailModule {}
