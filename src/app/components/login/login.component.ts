import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";
import {MatOption, MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormField,
    MatInputModule,
    FormsModule,
    MatLabel,
    MatButton,
    MatFormField,
    MatButton,
    MatSelect,
    MatOption
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = 'user';  // Init with mock user

  constructor(private router: Router, private loginService: LoginService) {}

  onLogin(): void {
    // Dummy login validation
    if (this.loginService.login(this.username)) {
      this.router.navigate(['/holidays']);
    }
  }

}
