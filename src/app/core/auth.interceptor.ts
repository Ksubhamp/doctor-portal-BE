import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LocalstorageService } from '../service/localstorage.service';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private stroageService:LocalstorageService,
    private dataSerivce:DataService,
    private router:Router
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const token = this.stroageService.get('token');
    const token = this.dataSerivce.getCookie('token');
    if (token) {
      req = req.clone({
        url:  req.url,
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(req).pipe( tap(() => {},
      (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status !== 401) {
         return;
        }
        this.dataSerivce.deleteAllCookie();
        this.dataSerivce.isLogin.next(true);
        this.stroageService.remove('token')
        this.router.navigate(['/admin']);
      }
    }));
  }
}
