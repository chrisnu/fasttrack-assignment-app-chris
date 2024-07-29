import { Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HolidayListComponent} from "./components/holiday-list/holiday-list.component";

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'holidays', component: HolidayListComponent }
];
