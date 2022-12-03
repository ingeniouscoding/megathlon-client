import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent, NotFoundPageComponent } from './components';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [
    NotFoundPageComponent,
    AppComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
  ],
})
export class CoreModule { }
