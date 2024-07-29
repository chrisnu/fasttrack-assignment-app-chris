import {Component, OnInit} from '@angular/core';
import {Holiday} from "../../models/holiday";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HolidayService} from "../../services/holiday.service";
import {LoginService} from "../../services/login.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Employee} from "../../models/employee";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatAnchor, MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {MatNativeDateModule, provideNativeDateAdapter} from "@angular/material/core";

@Component({
  selector: 'app-holiday-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerToggle,
    MatDatepickerInput,
    MatDatepicker,
    MatError,
    MatLabel,
    MatButton,
    NgIf,
    RouterLink,
    MatAnchor
  ],
  templateUrl: './holiday-form.component.html',
  styleUrl: './holiday-form.component.scss'
})
export class HolidayFormComponent implements OnInit {
  holidayForm: FormGroup;
  employee: Employee;
  mode: 'ADD' | 'UPDATE' = 'ADD';

  constructor(private fb: FormBuilder, private holidayService: HolidayService, private loginService: LoginService, private router: Router, private route: ActivatedRoute) {
    this.employee = loginService.getUser();
    this.holidayForm = this.fb.group({
      holidayLabel: ['', Validators.required],
      employeeId: [this.employee.id],
      startOfHoliday: [new Date(), Validators.required],
      endOfHoliday: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.holidayForm.valid) {
      if (this.mode === 'ADD') {
        this.holidayService.addHoliday(this.holidayForm.value).subscribe(() => {
          this.router.navigate(['/holidays']);
        });
      } else {
        const id: string = this.route.snapshot.queryParams.id;
        this.holidayService.updateHoliday(id, this.holidayForm.value).subscribe(() => {
          this.router.navigate(['/holidays']);
        });
      }
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      const editedId = queryParams['id'];
      if (editedId) {
        this.mode = 'UPDATE';
        this.holidayService.getHolidayById(editedId).subscribe(
            (data: Holiday) => {
              this.holidayForm.patchValue({
                holidayLabel: data.holidayLabel,
                startOfHoliday: data.startOfHoliday,
                endOfHoliday: data.endOfHoliday
              });
            }
        )
      } else {
        this.mode = 'ADD';
      }
    });
  }
}