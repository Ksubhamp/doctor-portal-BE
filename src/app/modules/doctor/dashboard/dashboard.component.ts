import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/service/data.service';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  gretting_msg:any="";
  doctor_data:any;
  selectDate : any ='';
  raw_data:any[]=[];
  cancelled_appoinment:any;
  patient_list:any[]=[];
  grouped_data:any[]=[];
  selectedDate:any;


  displayedColumns: string[] = ['position', 'Patient Name', 'Patient Phone', 'Appointment Date',"Appointment Time","Status"];
  dataSource :any[]=[];
  dataSources = new MatTableDataSource<PeriodicElement>(this.dataSource);
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(
    private dataService: DataService,
    private stroageService : LocalstorageService
  ) {
    let d = new Date();
    // this.selectDate = "2022-03";
    this.selectDate = this.dataService.getDateFormat(d);
    d.setHours(0, 0, 0, 0);
    this.getDashboardData(this.selectDate);

    var today = new Date();
    var curHr = today.getHours();

    if (curHr < 12) {
      this.gretting_msg = 'Good morning';
    } else if (curHr < 18) {
      this.gretting_msg = 'Good afternoon';
    } else {
      this.gretting_msg = 'Good evening';
    }
  }
  ngAfterViewInit() {
    this.dataSources.paginator = this.paginator != undefined ?this.paginator:null;
  }
  ngOnInit(): void {
  }

  getDashboardData(d :any) {
    this.selectedDate = d;
    this.dataService.dashboardData(d).subscribe((res: any) => {

      if (res.status) {
        this.doctor_data = res.data?.doctor;
        this.stroageService.set('doctor_data',JSON.stringify(this.doctor_data))
        this.dataService.profileData.next(this.doctor_data);
        this.patient_list = res.data?.l;
        this.dataSource = this.patient_list.map((e,i)=>{
          e['position'] = i+1;
          return e;
        })
        this.raw_data = res.data?.groupData;
        this.cancelled_appoinment = this.patient_list.filter(a => a.appointment_status == 'Cancelled').length;



        this.setByGroup()
      }
    },
      (err) => {

      })
  }
  getdata(e:any){
    console.log(e.target.value);
    let d = e.target.value
    // d.setHours(0, 0, 0, 0);
    this.getDashboardData(d)
  }
  setByGroup(){
    let  groups = this.raw_data.reduce((groups, app) => {
      const date = app.appointment_date.split('T')[0];
      if (!groups[app.appointment_date]) {
        groups[app.appointment_date] = [];
      }
      groups[app.appointment_date].push(app);
      return groups;
    }, {});
    this.grouped_data = Object.keys(groups).map((date) => {
      return {
        date,
        apps: groups[date],
        closed:groups[date].filter((q:any) => q.appointment_status == 'Closed').length,
        Cancelled:groups[date].filter((q:any) => q.appointment_status == 'Cancelled').length,
      };
    });
    
    console.log(this.grouped_data);
  }
  updateStatus(id:any,s:any){
    this.dataService.updateAppoinmentStatus(id,s).subscribe((res:any)=>{
      if (res.status) {
        this.getDashboardData(this.selectedDate);
      }
    },
    (err)=>{

    })
  }

}





