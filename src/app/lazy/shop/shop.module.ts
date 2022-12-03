import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutModule } from 'src/app/global/layout/layout.module';

import { ShopContainerComponent } from './components';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [
    ShopContainerComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    LayoutModule,
  ],
})
export class ShopModule { }
