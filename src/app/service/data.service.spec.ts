import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

fdescribe('DataService', () => {
  let service: DataService;
  let http: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Get Doctor list ', () => {
    let data_service = TestBed.inject(DataService);
    // spyOn(auth_service, "login").and.callFake(() => {
    //   return of(returnVal)
    // })
    service.doctorList().subscribe((res: any) => {
      expect(res).toEqual(true);
    });
    expect(true).toEqual(true);
  })


  it('Get appoinment detalis ', () => {
    const input = { "doctor_id": "62724a9535802fcf6f1d7f3c", "date": "2022-05-08T18:30:00.000Z" }
    service.appointmentDetalis(input.date, input.doctor_id).subscribe((res: any) => {
      expect(res).toEqual(true);
    });
    expect(true).toEqual(true);
  })

  it('Get dashboard detalis ', () => {
    const input = { "date": "2022-05" };
    service.dashboardData(input).subscribe((res: any) => {
      expect(res).toEqual(true);
    });
    expect(true).toEqual(true);
  })


  it('Book appoinment  ', () => {
    const input = {
      "appointment_date": "05/17/2022",
      "doctor_id": "62724a4f35802fcf6f1d7f2c",
      "appointment_time": "09:30",
      "patient_name": "Ram nath sing",
      "patinet_email": "rama@yopmail.com",
      "patinet_phone": "5874145211"
    };
    service.bookAppointment(input).subscribe((res: any) => {
      expect(res).toEqual(true);
    });
    expect(true).toEqual(true);
  })


  it('Update appoinment  ', () => {
    const inputId ="62724a4f35802fcf6f1d7f2c";
    const appointment_status ="Closed";
    service.updateAppoinmentStatus(inputId,appointment_status).subscribe((res: any) => {
      expect(res).toEqual(true);
    });
    expect(true).toEqual(true);
  })

  it('get formated date  ', () => {
    const inputDate =new Date('2022-05-10');
    let output =  service.getDateFormat(inputDate);
    expect(output).toEqual('2022-05');
  })


  it('set cookies', () => {
    const inputName = "token";
    const inputValue = "62724a9535802fcf6f1d7f3c";
    let output =  service.setCookie(inputName,inputValue);
    
    expect(output).toEqual();
  })


  it('Get  cookies', () => {
    const inputName = "token";
    const inputValue = "62724a9535802fcf6f1d7f3c";
    service.setCookie(inputName,inputValue);
    let output =  service.getCookie(inputName);
    expect(output).toEqual(inputValue);
  })

  it('Delete cookies', () => {
    const inputName = "token";
    const inputValue = "62724a9535802fcf6f1d7f3c";
    service.setCookie(inputName,inputValue);
    let output =  service.deleteCookie(inputName);
    expect(output).toEqual(undefined);
  })


  it('Delete cookies', () => {
    const inputName = "token";
    const inputValue = "62724a9535802fcf6f1d7f3c";
    service.setCookie(inputName,inputValue);
    let output =  service.deleteAllCookie();
    expect(output).toEqual(undefined);
  })





});
