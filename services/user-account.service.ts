import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAccountService {
  private people: Observable<any[]> = of([
    {
      name: 'Ana',
      height: 170,
      weight: 60,
      eyeColor: 'blue',
      hairColor: 'black',
    },
    {
      name: 'Marko',
      height: 185,
      weight: 80,
      eyeColor: 'brown',
      hairColor: 'blonde',
    },
    {
      name: 'Jovana',
      height: 160,
      weight: 50,
      eyeColor: 'green',
      hairColor: 'red',
    },
    {
      name: 'Stefan',
      height: 175,
      weight: 70,
      eyeColor: 'blue',
      hairColor: 'brown',
    },
    {
      name: 'Milica',
      height: 165,
      weight: 55,
      eyeColor: 'brown',
      hairColor: 'black',
    },
    {
      name: 'Nemanja',
      height: 180,
      weight: 75,
      eyeColor: 'blue',
      hairColor: 'brown',
    },
    {
      name: 'Tamara',
      height: 155,
      weight: 45,
      eyeColor: 'brown',
      hairColor: 'red',
    },
  ]);

  constructor() {}

  getPeople() {
    return this.people;
  }
}
