import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: any = environment.baseUrl;
  public isLogin = new BehaviorSubject<boolean>(true);
  public profileData = new BehaviorSubject<boolean>(true);
  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }
  refresh = this.isLogin.asObservable();
  profileDatasub = this.profileData.asObservable();

  doctorList() {
    return this.http.get(this.baseUrl + 'doctor')
  }

  appointmentDetalis(date: any, doctor_id: any) {
    return this.http.post(this.baseUrl + 'appointment', { doctor_id, date })
  }
  bookAppointment(payload: any) {
    return this.http.post(this.baseUrl + 'appointment/book', payload)
  }

  dashboardData(date: any) {
    return this.http.post(this.baseUrl + 'doctor/dashboard', { date })
  }

  updateAppoinmentStatus(id: any, appointment_status: any) {
    return this.http.post(this.baseUrl + 'appointment/statusUpdate', { id, appointment_status })
  }

  getDateFormat(d: Date) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
    // return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0')
  }



  setCookie(name:any,value:any){
    return this.cookieService.set(name, value);
  }

  getCookie(name:any){
    return this.cookieService.get(name);
  }

  deleteCookie(name:any){
    return this.cookieService.delete(name);
  }

  deleteAllCookie(){
    return this.cookieService.deleteAll();
  }

}