import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DimensionsService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  getDimensions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/dimensions`);
  }

  createDimension(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/dimensions`, data);
  }
}
