import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { UserAccountService } from "src/app/services/user-account.service";
import { StartComponent } from "../closedialog/start.component";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class EditComponent implements OnInit {
  users = false;
  userForm!: FormGroup;
  userId!: number;
  user: any;
  constructor(
    private route: ActivatedRoute,
    private routes: Router,
    private userService: UserAccountService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.userForm = this.formBuilder.group({
      name: ["", Validators.required],
      height: [null, Validators.required],
      weight: [null, Validators.required],
      eyeColor: ["", Validators.required],
      hairColor: ["", Validators.required],
    });
  }

  updateUser(id: number) {
    const updateUser = this.userForm.value;
    this.userService.updateUser(id, updateUser).then((response) => {
      this.snackBar.open("User change successfully!", "Close", {
        duration: 3000,
      });
      this.routes.navigate(["content"]);
    });
  }
  onInputChange(): void {
    this.users = true;
  }
  onSubmit() {}

  deleteUser(id: number, name: string) {
    const dialogRef = this.dialog.open(StartComponent, {
      data: { name },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result === true) {
        this.userService
          .deleteUser(id)
          .then(() => {
            this.snackBar.open(`User ${name} deleted successfully!`, "Close", {
              duration: 3000,
            });
            this.routes.navigate(["content"]);
          })
          .catch((error) => {
            console.error(error.message);
          });
      } else {
        this.routes.navigate(["content"]);
      }
    });
  }

  ngOnInit() {
    this.route.params.subscribe((result) => {
      this.userId = +result["id"];
      this.user = this.userService.getPersonById(this.userId);
    });
    this.userForm.patchValue({
      name: this.user.name,
      height: this.user.height,
      weight: this.user.weight,
      eyeColor: this.user.eyeColor,
      hairColor: this.user.hairColor,
    });
  }
}
