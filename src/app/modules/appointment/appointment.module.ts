import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { DoctorlistComponent } from './doctorlist/doctorlist.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../Materia/mat.module';


@NgModule({
  declarations: [
    DoctorlistComponent,
    BookAppointmentComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class AppointmentModule { }
