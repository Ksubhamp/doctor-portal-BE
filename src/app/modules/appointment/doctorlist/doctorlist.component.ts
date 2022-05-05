import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-doctorlist',
  templateUrl: './doctorlist.component.html',
  styleUrls: ['./doctorlist.component.css']
})
export class DoctorlistComponent implements OnInit {
  doctorList: any[] = [];
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getDoctorList();
  }

  getDoctorList() {
    this.dataService.doctorList().subscribe((res: any) => {
      if (res.status == true)
        this.doctorList = res.data;
    },
      (err) => { })
  }
}
