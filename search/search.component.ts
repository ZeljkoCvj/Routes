import { Component, OnInit } from "@angular/core";
import { UserAccountService } from "../services/user-account.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  inputStr = "";
  array: any[] = [];
  arrayFilter: any[] = [];

  constructor(private userService: UserAccountService, private route: Router) {
    this.array = this.userService.getPeople();
  }

  inputField() {
    const inputValue = this.inputStr.toLowerCase().trim();
    if (inputValue) {
      this.arrayFilter = this.array.filter((user: any) => {
        return user.name.toLowerCase().includes(inputValue);
      });
    } else {
      this.arrayFilter = [];
    }
  }

  edit(userid: number) {
    this.route.navigate(["/edit", userid]);
  }

  ngOnInit() {}
}
