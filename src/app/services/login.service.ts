import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Employee} from "../models/employee";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  KEY_USER: string = 'user';

  constructor(private router: Router) { }

  login(username: string): boolean {
    // Dummy login validation
    if (username) {
      // Mock login
      if (username === 'user') {
        localStorage.setItem(this.KEY_USER, JSON.stringify(Employee.mock1));
      } else {
        localStorage.setItem(this.KEY_USER, JSON.stringify(Employee.mock2));
      }

      return true;
    }

    return false;
  }

  getUser(): Employee {
    const user: string|null = localStorage.getItem('user');

    if (user) {
      const obj = JSON.parse(user);
      return new Employee(obj.id, obj.name);
    }

    this.router.navigate(['/login']);
    return new Employee('', '');
  }
}
