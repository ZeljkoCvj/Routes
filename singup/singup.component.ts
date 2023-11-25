import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss'],
})
export class SingupComponent implements OnInit {
  fullName!: string;
  email!: string;
  password!: string;

  constructor(private authService: AuthServiceService) {}

  onSubmit(form: NgForm) {
    const { email, password } = form.value;
    this.authService.singUp({
      email,
      password,
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
