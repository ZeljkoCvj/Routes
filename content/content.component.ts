import { Component, OnInit } from '@angular/core';
import { UserAccountService } from '../services/user-account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  user: any[] = [];
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.data.subscribe((userInfo) => {
      this.user = userInfo['status'];
    });
  }
}
