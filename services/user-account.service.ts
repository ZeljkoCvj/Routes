import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserAccountService {
  private people: any[] = [
    {
      id: 1,
      name: "Ana",
      height: 170,
      weight: 60,
      eyeColor: "blue",
      hairColor: "black",
    },
    {
      id: 2,
      name: "Marko",
      height: 185,
      weight: 80,
      eyeColor: "brown",
      hairColor: "blonde",
    },
    {
      id: 3,
      name: "Jovana",
      height: 160,
      weight: 50,
      eyeColor: "green",
      hairColor: "red",
    },
    {
      id: 4,
      name: "Stefan",
      height: 175,
      weight: 70,
      eyeColor: "blue",
      hairColor: "brown",
    },
    {
      id: 5,
      name: "Milica",
      height: 165,
      weight: 55,
      eyeColor: "brown",
      hairColor: "black",
    },
    {
      id: 6,
      name: "Nemanja",
      height: 180,
      weight: 75,
      eyeColor: "blue",
      hairColor: "brown",
    },
    {
      id: 7,
      name: "Tamara",
      height: 155,
      weight: 45,
      eyeColor: "brown",
      hairColor: "red",
    },
  ];

  constructor() {}

  getPeople() {
    return this.people;
  }

  addUser(user: any): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.people.push(user);
        resolve({ message: "User added successfully!" });
      } catch (err) {}
    });
  }

  getPersonById(userId: number): any | undefined {
    return this.people.find((user) => user.id === userId);
  }
  deleteUser(userId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        const index = this.people.findIndex((user) => user.id === userId);
        if (index !== -1) {
          this.people.splice(index, 1);
          resolve({ message: "User deleted successfully!" });
        } else {
          reject({ message: "User not found!" });
        }
      } catch (err) {
        reject({ message: "Error deleting user!" });
      }
    });
  }
}
