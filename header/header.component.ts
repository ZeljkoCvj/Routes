import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuth!: boolean;
  authSubscription!: Subscription;
  cdr: any;
  constructor(private authService: AuthServiceService) {}

  logout() {
    this.authService.logOut();
  }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe((result) => {
      this.isAuth = result;
    });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
