import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { ResponseInterface } from '../interfaces/response.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AudioApiService {

  constructor(private http: HttpClient) { }

  getTracks(count: number) {
    const params = new HttpParams().set('limit', count);

    return this.http.get<ResponseInterface>('tracks', { params });
  }
}
