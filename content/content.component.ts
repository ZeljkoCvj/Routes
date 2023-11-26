import { Component, Input, OnInit } from "@angular/core";
import { UserAccountService } from "../services/user-account.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
})
export class ContentComponent implements OnInit {
  user: any[] = [];
  constructor(private route: ActivatedRoute, private routes: Router) {}

  editUser(userId: number) {
    this.routes.navigate(["/edit", userId]);
  }

  ngOnInit(): void {
    this.route.data.subscribe((userInfo) => {
      this.user = userInfo["status"];
    });
  }
}
