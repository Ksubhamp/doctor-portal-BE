import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Component({
  selector: 'app-headder',
  templateUrl: './headder.component.html',
  styleUrls: ['./headder.component.css']
})
export class HeadderComponent implements OnInit {
  isLogin:boolean=false;
  constructor(
    private router:Router,
    private striageSerive:LocalstorageService
  ) { 
    if (this.striageSerive.get('token')) {
      this.isLogin = true
    }
  }

  ngOnInit(): void {
  }
  logout(){
    this.striageSerive.remove('token');
    this.router.navigate(['/admin'])
    this.isLogin = false
  }

}
