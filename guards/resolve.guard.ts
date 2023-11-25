import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { UserAccountService } from '../services/user-account.service';
import { Observable } from 'rxjs';
interface User {
  name: string;
  height: number;
  weight: number;
  eyeColor: string;
  hairColor: string;
}

@Injectable()
export class Resolvere
  implements Resolve<User[] | Observable<User[]> | Promise<User[]>>
{
  constructor(private userService: UserAccountService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): User[] | Observable<User[]> | Promise<User[]> {
    return this.userService.getPeople();
  }
}
