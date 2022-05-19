import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';

const matrialModules = [
  MatButtonModule,
  MatTooltipModule,
  MatCardModule,
  MatInputModule,
  MatMenuModule,
  MatTableModule,
  MatDatepickerModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatIconModule,
  MatSelectModule,
  MatChipsModule
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
