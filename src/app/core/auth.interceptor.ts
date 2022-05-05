import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalstorageService } from '../service/localstorage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private stroageService:LocalstorageService
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.stroageService.get('token');
    req = req.clone({
      url:  req.url,
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(req);
  }
}
