import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DataService } from './data.service';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: any =environment.baseUrl;

  constructor(
    private http: HttpClient,
    private striageSerive: LocalstorageService,
    private dataService: DataService,
    private router: Router,

  ) { }
  login(o:any){
    return this.http.post(this.baseUrl + 'auth/login',o);
  }
  signup(o:any){
    return this.http.post(this.baseUrl + 'auth/signup',o);
  }
  logout(){
    this.striageSerive.remove('token');
    this.striageSerive.remove('doctor_data');
    this.dataService.isLogin.next(true); 
    this.router.navigate(['/admin'])
  }
}
