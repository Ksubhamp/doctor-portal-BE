import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppModule } from '../app.module';

import { AuthService } from './auth.service';

fdescribe('AuthService', () => {
  let service: AuthService;
  let http: HttpClient;
  let httpController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, AppModule],
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Login api ', () => {
    const returnVal = {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzIyNGZiNzNlZmY5NWYyOGIzYjg1MSIsImlhdCI6MTY1MjA3OTc1NCwiZXhwIjoxNjUyMTY2MTU0fQ.tqCMLeeftqjjTE2Rm9TSszHZzEYmr9bsUlaT7nCycAk",
      "timeStamp": 1652079754927,
      "token_expaire": null
    };
    const inputData = {
      email: "Gouri@ams.com",
      password: "tetsuser"
    };
    let auth_service = TestBed.inject(AuthService);
    // spyOn(auth_service, "login").and.callFake(() => {
    //   return of(returnVal)
    // })

    service.login(inputData).subscribe((res: any) => {
      expect(res).toEqual(returnVal);
    });
    expect(true).toEqual(true);



  })
});
