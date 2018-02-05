import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';


const appRoutes: Routes = [
 {  path: 'admin',
// loadChildren: 'app/admin/admin.module#AdminModule',
 component : AdminComponent
},
{  path: 'client',
// loadChildren: 'app/admin/admin.module#AdminModule',
 component : ClientComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
