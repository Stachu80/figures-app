import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { ApiData } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public getData$(): Observable<ApiData> {
    return this.httpClient.get<ApiData>(`${environment.apiUrl}`);
  }
}
