import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, filter, finalize } from 'rxjs/operators';
import { LoaderService } from '../service/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(
    public loaderService: LoaderService,
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.showLoader(req);
    return next.handle(req).pipe(
      finalize(() => {
        this.hideLoader(req);
      }),
      catchError((error: HttpErrorResponse) => {
        this.hideLoader(req);
        return next.handle(req);
      })
    );
  }

  private showLoader(req: HttpRequest<any>) {
    this.loaderService.show();

  }

  private hideLoader(req: HttpRequest<any>) {
    this.loaderService.hide();
  }
}
