import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';

const CLIENT_ID = 'd1fb8a8d';
const BASE_URL = 'https://api.jamendo.com/v3.0/';

@Injectable()
export class CoreInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {

    const updatedRequest = request.clone({
      url: `${BASE_URL}${request.url}`,
      setParams: { client_id: CLIENT_ID },
    });
    return next.handle(updatedRequest);
  }
}
