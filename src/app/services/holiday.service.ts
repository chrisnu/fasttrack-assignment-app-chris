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

  getHolidayById(holidayId: string): Observable<Holiday> {
    return this.http.get<Holiday>(`${this.baseUrl}/${holidayId}`);
  }

  addHoliday(holiday: Holiday): Observable<Holiday> {
    return this.http.post<Holiday>(this.baseUrl, holiday);
  }

  updateHoliday(holidayId: string, holiday: Holiday): Observable<Holiday> {
    return this.http.put<Holiday>(`${this.baseUrl}/${holidayId}`, holiday);
  }

}
