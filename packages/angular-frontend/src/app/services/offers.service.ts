import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  getOffers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/offers`);
  }

  createOffer(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/offers`, data);
  }

  getDimensions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/dimensions`);
  }

  calculateDimensions(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/dimensions/calculate`, data);
  }

  createDimension(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/dimensions`, data);
  }

  convertToCm(value: number): number {
    return value * 2.54;
  }

  convertToInches(value: number): number {
    return value / 2.54;
  }

  convertToKg(value: number): number {
    return value * 0.453592;
  }

  convertToLb(value: number): number {
    return value / 0.453592;
  }
}
