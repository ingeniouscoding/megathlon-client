import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopContainerComponent, ShowcasePageComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: ShopContainerComponent,
    children: [
      {
        path: '',
        component: ShowcasePageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule { }
