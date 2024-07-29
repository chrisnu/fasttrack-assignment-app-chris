import { Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HolidayListComponent} from "./components/holiday-list/holiday-list.component";
import {HolidayFormComponent} from "./components/holiday-form/holiday-form.component";

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'holidays', component: HolidayListComponent },
    { path: 'add-holiday', component: HolidayFormComponent },
    { path: 'edit-holiday', component: HolidayFormComponent }
];
