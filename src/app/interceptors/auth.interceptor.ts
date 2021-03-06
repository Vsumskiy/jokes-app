import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.headers.get('skipInterceptor')) {
      return next.handle(req);
    }
    if (this.authService.authenticated) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.user.token}`,
          Accept: 'application/json'
        }
      });
    }
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log('interceptor error', err);
        if (err.status === 401) {
          this.authService.logout();
          this.router.navigate(['/auth']);
        }
        return throwError(err);
      })
    );
  }
}
