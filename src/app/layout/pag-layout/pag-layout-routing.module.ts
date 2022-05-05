import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagLayoutComponent } from './pag-layout.component';

const routes: Routes = [
  {
    path:'',
    component:PagLayoutComponent,
    children:[
      {
        path:"",
        loadChildren:() => import('../../modules/appointment/appointment.module').then(o => o.AppointmentModule)
      },
      {
        path:"admin",
        loadChildren:() => import('../../modules/doctor/doctor.module').then(o => o.DoctorModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagLayoutRoutingModule { }
