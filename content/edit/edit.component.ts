import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserAccountService } from "src/app/services/user-account.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class EditComponent implements OnInit {
  userId!: number;
  user: any;
  constructor(
    private route: ActivatedRoute,
    private routes: Router,
    private userService: UserAccountService
  ) {}
  updateUser() {}

  deleteUser(id: number) {
    this.userService
      .deleteUser(id)
      .then((responese) => {
        console.log("Usepsno izbrisan korisnik");
        this.routes.navigate(["content"]);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  ngOnInit() {
    this.route.params.subscribe((result) => {
      this.userId = +result["id"];
      this.user = this.userService.getPersonById(this.userId);
    });
  }
}
