import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagLayoutRoutingModule } from './pag-layout-routing.module';
import { PagLayoutComponent } from './pag-layout.component';
import { CoreModule } from 'src/app/modules/core/core.module';


@NgModule({
  declarations: [
    PagLayoutComponent
  ],
  imports: [
    CommonModule,
    PagLayoutRoutingModule,
    CoreModule
  ]
})
export class PagLayoutModule { }
