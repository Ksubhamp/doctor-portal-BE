import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
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
    return this.http.post(this.baseUrl + 'doctor/dashboard?page=1&limit=100', { date })
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

  getProfile(){
    return this.http.get(this.baseUrl + 'doctor/profile')
  }

  downloadPdf(id:string) {
    var data = document.getElementById(id) as HTMLElement;
    html2canvas(data).then(canvas => {
      // Few necessary setting options  
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save(`${id}.pdf`); // Generated PDF   
    });
  }
  
}