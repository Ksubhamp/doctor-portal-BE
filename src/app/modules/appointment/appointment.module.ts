import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { DoctorlistComponent } from './doctorlist/doctorlist.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DoctorlistComponent,
    BookAppointmentComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppointmentModule { }
