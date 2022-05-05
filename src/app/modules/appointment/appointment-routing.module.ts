import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { DoctorlistComponent } from './doctorlist/doctorlist.component';

const routes: Routes = [
  {
    path:"",
    component:DoctorlistComponent
  },
  {
    path:'doctor/:id',
    component:BookAppointmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
