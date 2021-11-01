import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Data } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public getData$(): Observable<Data> {
    return this.httpClient.get<Data>(`${environment.apiUrl}`);
  }
}
