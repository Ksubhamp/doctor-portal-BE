import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
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
    private authService: AuthService,

    private striageSerive:LocalstorageService
  ) { 
    this.dataService.refresh.subscribe((b:any)=>{

      if (this.striageSerive.get('token')) {
        this.isLogin = true
      }else{
        this.isLogin = false
      }
    })
    this.dataService.profileDatasub.subscribe((res:any)=>{
      this.doctorData = this.striageSerive.get('doctor_data');
      this.doctorData = JSON.parse(this.doctorData)
    }
    )
  }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logout();
  }

}
