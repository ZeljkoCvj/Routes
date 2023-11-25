import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthServiceService) {}

  onSubmit(form: NgForm) {
    const { email, password } = form.value;
    this.authService.login({ email, password });
  }
}
