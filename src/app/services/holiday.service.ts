import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Holiday} from "../models/holiday";

@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  private baseUrl = '/api/holidays';

  constructor(private http: HttpClient) {}

  getHolidays(employeeId: string): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(this.baseUrl, {
      params: {
        employeeId: employeeId
      }
    });
  }

  deleteHoliday(holidayId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${holidayId}`);
  }
}
