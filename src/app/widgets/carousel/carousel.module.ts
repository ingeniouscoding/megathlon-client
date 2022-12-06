import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageCarouselComponent } from './components';

@NgModule({
  declarations: [
    ImageCarouselComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ImageCarouselComponent,
  ],
})
export class CarouselModule { }
