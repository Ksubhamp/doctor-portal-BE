import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LoginComponent } from './login.component';
import { DataService } from 'src/app/service/data.service';
import { AuthService } from 'src/app/service/auth.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DoctorModule } from '../doctor.module';
import { AppModule } from 'src/app/app.module';
import { of } from 'rxjs';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: DataService;
  // let authservice: AuthService;
  let http: HttpClient;
  let httpController: HttpTestingController;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [DoctorModule, AppModule],
      providers: []
    })
      .compileComponents();
    // service = TestBed.inject(DataService);
    // http = TestBed.inject(HttpClient);
    // httpController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('login ', () => {
    let auth_service = TestBed.inject(AuthService);

    const returnVal = {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzIyNGZiNzNlZmY5NWYyOGIzYjg1MSIsImlhdCI6MTY1MjA3OTc1NCwiZXhwIjoxNjUyMTY2MTU0fQ.tqCMLeeftqjjTE2Rm9TSszHZzEYmr9bsUlaT7nCycAk",
      "timeStamp": 1652079754927,
      "token_expaire": null
    };
    // component.loginForm.patchValue({
    //   "email": "Gouri@ams.com",
    //   "password": "testuser"
    // });
    component.loginForm.controls['email'].setValue('Gouri@ams.com');
    component.loginForm.controls['password'].setValue('testuser');

    spyOn(auth_service, "login").and.callFake(() => {
      return of(returnVal)
    })
    // authservice.login
    
    // component.loginForm.valid = true;
    component.onSubmit();
    expect(component.loginForm.valid).toBeTruthy();
    // if (component.loginForm.valid) {
    // } else {

    // }
    // expect(component).toBeTruthy();
  });





});
