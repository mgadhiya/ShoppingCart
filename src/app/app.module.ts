import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AdminModule } from './admin/admin.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { ClientRoutingModule } from './client/client-routing.module';
import {ClientModule } from './client/clientmodule';

import { ShowproductsComponent } from './client/showproducts/showproducts.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AdminModule,
    ClientModule,
    AppRoutingModule,
    ClientRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
