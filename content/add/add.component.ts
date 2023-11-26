import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserAccountService } from "src/app/services/user-account.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
})
export class AddComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    private userService: UserAccountService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit() {
    this.userForm = this.fb.group({
      name: ["", Validators.required],
      height: [null, Validators.required],
      weight: [null, Validators.required],
      eyeColor: ["", Validators.required],
      hairColor: ["", Validators.required],
    });
  }
  onSubmit() {
    if (this.userForm.valid) {
      const newUser = this.userForm.value;

      this.userService
        .addUser(newUser)
        .then((response: any) => {
          console.log("Korisnik uspešno dodat:", response);
        })
        .catch((error: any) => {
          console.error("Greška prilikom dodavanja korisnika:", error);
        });
    }
    this.router.navigate(["content"]);
  }
}
