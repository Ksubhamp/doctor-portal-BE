import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountComponent } from './count/count.component';
import { MaterialModule } from '../Materia/mat.module';
import { ReportSummaryComponent } from './report-summary/report-summary.component';
import { ReportCountSummaryComponent } from './report-count-summary/report-count-summary.component';
import { TimerComponent } from './timer/timer.component';


const componentsList = [
  CountComponent,
  ReportSummaryComponent,
  ReportCountSummaryComponent,
  TimerComponent
]
@NgModule({
  declarations: [
    componentsList,
    ReportCountSummaryComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]  ,
  exports:[
    componentsList
  ]
})
export class SharedModule {
  // static forRoot(){
  //   return {
  //     NgModule:SharedModule,
  //     providers:[]
  //   }
  // }
 }
