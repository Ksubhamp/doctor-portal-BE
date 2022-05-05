import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadderComponent } from './headder/headder.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeadderComponent,
  ],
  imports: [
    CommonModule,RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[HeadderComponent,  FormsModule,
  ReactiveFormsModule]
})
export class CoreModule { }
