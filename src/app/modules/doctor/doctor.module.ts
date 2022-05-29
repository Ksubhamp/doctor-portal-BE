import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { MaterialModule } from '../Materia/mat.module';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../componets/shared.module';
import {NgxPaginationModule} from 'ngx-pagination'; 


@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class DoctorModule { }
