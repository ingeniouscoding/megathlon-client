import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ShopLayoutComponent } from './components';

@NgModule({
  declarations: [
    ShopLayoutComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ShopLayoutComponent,
  ],
})
export class LayoutModule { }
