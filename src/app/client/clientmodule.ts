import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientComponent } from './client.component';

import { ClientRoutingModule } from './client-routing.module';
import { ShowProductModule } from './showproducts/showproducts.module';


@NgModule({
  imports: [
    CommonModule,
    ShowProductModule,
    ClientRoutingModule
  ],
  declarations: [
   ClientComponent
  ]
})
export class ClientModule {}
