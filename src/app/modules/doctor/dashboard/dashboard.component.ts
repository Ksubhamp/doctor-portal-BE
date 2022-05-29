import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/service/data.service';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDatepicker } from '@angular/material/datepicker';
import { animate, state, style, transition, trigger } from '@angular/animations';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DashboardComponent implements OnInit {
  gretting_msg: any = "";
  doctor_data: any;
  selectDate: any = '';
  raw_data: any[] = [];
  count: any;
  cancelled_appoinment: any;
  patient_list: any[] = [];
  grouped_data: any[] = [];
  selectedDate: any;
  p: number = 1;
  tab: string = 'Patients';
  // expandedElement: PeriodicElement | null;

  displayedColumns: string[] = ['position', 'Patient Name', 'Patient Phone', 'Appointment Date', "Appointment Time", "Status"];
  dataSource: any[] = [];
  orgdataSource: any[] = [];

  dataSources = new MatTableDataSource<PeriodicElement>(this.dataSource);
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(
    private dataService: DataService,
    private stroageService: LocalstorageService
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
    this.dataSources.paginator = this.paginator != undefined ? this.paginator : null;
  }
  ngOnInit(): void {
  }

  getDashboardData(d: any) {
    this.selectedDate = d;
    this.dataService.dashboardData(d).subscribe((res: any) => {

      if (res.status) {
        this.doctor_data = res.data?.doctor;
        this.stroageService.set('doctor_data', JSON.stringify(this.doctor_data))
        this.dataService.profileData.next(this.doctor_data);
        this.patient_list = res.data?.l;
        this.dataSource = this.patient_list.map((e, i) => {
          e['position'] = i + 1;
          let offset = new Date(e.appointment_date).getTimezoneOffset()
          let newdate = new Date(new Date(e.appointment_date).getTime() - (offset * 60 * 1000))
          e['formatedDate'] = newdate.toISOString().split('T')[0].split('-').reverse().join('/')
          return e;
        })
        this.orgdataSource = this.dataSource;
        this.raw_data = res.data?.groupData;
        this.count = res.data?.count;



        this.setByGroup()
      }
    },
      (err) => {

      })
  }
  getdata(e: any) {
    console.log(e.target.value);
    let d = e.target.value
    // d.setHours(0, 0, 0, 0);
    this.getDashboardData(d)
  }
  setByGroup() {
    let groups = this.raw_data.reduce((groups, app) => {
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
        closed: groups[date].filter((q: any) => q.appointment_status == 'Closed').length,
        Cancelled: groups[date].filter((q: any) => q.appointment_status == 'Cancelled').length,
      };
    });

    console.log(this.grouped_data);
  }
  updateStatus(id: any, s: any) {
    this.dataService.updateAppoinmentStatus(id, s).subscribe((res: any) => {
      if (res.status) {
        this.getDashboardData(this.selectedDate);
      }
    },
      (err) => {

      })
  }

  setMonthAndYear(normalizedMonthAndYear: any, datepicker: any) {
    // const ctrlValue = this.date.value;
    // ctrlValue.month(normalizedMonthAndYear.month());
    // ctrlValue.year(normalizedMonthAndYear.year());
    // this.date.setValue(ctrlValue);
    datepicker.close();
  }
  onSearch(e: any) {
    this.patient_list = this.orgdataSource.filter((o: any) => {
      return ['patient_name',
        'patinet_email',
        'formatedDate',
        'patinet_phone',
        'appointment_time',
        'appointment_status',].some(function (k) {
          return o[k].toString().toLowerCase().indexOf(e.target.value) !== -1;
        });
    })
  }

  downloadPdf(id: string) {
    this.dataService.downloadPdf(id)
  }


}





