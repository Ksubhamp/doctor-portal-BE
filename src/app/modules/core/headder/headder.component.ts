import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Component({
  selector: 'app-headder',
  templateUrl: './headder.component.html',
  styleUrls: ['./headder.component.css']
})
export class HeadderComponent implements OnInit {
  isLogin:boolean=false;
  doctorData:any;
  constructor(
    private router:Router,
    private dataService: DataService,

    private striageSerive:LocalstorageService
  ) { 
    this.dataService.refresh.subscribe((b:any)=>{

      if (this.dataService.getCookie('token')) {
        this.isLogin = true
      }else{
        this.isLogin = false
      }
    })
    this.dataService.profileDatasub.subscribe((res:any)=>{
      this.doctorData = this.dataService.getCookie('doctor_data');
      this.doctorData = JSON.parse(this.doctorData)
    }
    )
  }

  ngOnInit(): void {
  }
  logout(){
    this.dataService.deleteAllCookie();
    // this.striageSerive.remove('token');
    this.dataService.isLogin.next(true); 
    this.router.navigate(['/admin'])
  }

}
