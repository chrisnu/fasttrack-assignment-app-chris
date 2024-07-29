import {Component, OnInit} from '@angular/core';
import {HolidayService} from "../../services/holiday.service";
import {LoginService} from "../../services/login.service";
import {Router, RouterLink} from "@angular/router";
import {Holiday} from "../../models/holiday";
import {Employee} from "../../models/employee";
import {DatePipe} from "@angular/common";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-holiday-list',
  standalone: true,
  imports: [
    DatePipe,
    RouterLink,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatButton
  ],
  templateUrl: './holiday-list.component.html',
  styleUrl: './holiday-list.component.scss'
})
export class HolidayListComponent implements OnInit {
  holidays: Holiday[] = [];
  employee: Employee;
  displayedColumns: string[] = ['holidayLabel', 'startOfHoliday', 'endOfHoliday', 'status', 'actions'];

  constructor(private holidayService: HolidayService, private loginService: LoginService, private router: Router) {
    this.employee = this.loginService.getUser();
  }

  ngOnInit(): void {
    this.loadHolidays();
  }

  loadHolidays(): void {
    if (!this.employee) {
      return;
    }

    this.holidayService.getHolidays(this.employee.id).subscribe(holidays => {
      this.holidays = holidays;
    });
  }

  deleteHoliday(holidayId: string): void {
    this.holidayService.deleteHoliday(holidayId).subscribe(() => {
      this.loadHolidays();
    });
  }
}
