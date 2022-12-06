import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutModule } from 'src/app/global/layout/layout.module';
import { CarouselModule } from 'src/app/widgets/carousel/carousel.module';

import { ShopContainerComponent, ShowcasePageComponent } from './components';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [
    ShopContainerComponent,
    ShowcasePageComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    LayoutModule,
    CarouselModule,
  ],
})
export class ShopModule { }
