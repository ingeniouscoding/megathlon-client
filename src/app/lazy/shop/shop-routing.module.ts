import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopContainerComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: ShopContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule { }
