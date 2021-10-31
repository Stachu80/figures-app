import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { Figures } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public getFigures$(): Observable<Figures> {
    return this.httpClient.get<Figures>(`${environment.apiUrl}/figures`);
  }
}
