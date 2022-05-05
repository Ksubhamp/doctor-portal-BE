import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: any =environment.baseUrl;
  constructor(
    private http: HttpClient
  ) { }

  doctorList() {
    return this.http.get(this.baseUrl + 'doctor')
  }

  appointmentDetalis(date:any,doctor_id:any){
    return this.http.post(this.baseUrl + 'appointment',{doctor_id,date})
  }
  bookAppointment(payload:any){
    return this.http.post(this.baseUrl + 'appointment/book',payload)
  }

  dashboardData(date:any){
    return this.http.post(this.baseUrl + 'doctor/dashboard',{date})
  }
  
  getDateFormat(d: Date) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0')
  }
}
