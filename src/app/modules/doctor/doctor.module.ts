import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DoctorModule { }
