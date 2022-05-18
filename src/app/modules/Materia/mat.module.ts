import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

const matrialModules = [
  MatButtonModule,
  MatTooltipModule,
  MatCardModule,
  MatInputModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    matrialModules
  ],
  exports:[
    matrialModules
  ]
})
export class MaterialModule { }
