import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthServiceService) {}
  ngOnInit() {
    this.authService.isLoginLogiut();
  }
  title = 'Route';
}
