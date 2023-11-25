import { auth } from './../interface/auth.interface';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  isAuthitication!: boolean;
  public authChange = new Subject<boolean>();
  constructor(
    private router: Router,
    private authFire: AngularFireAuth,
    private afs: AngularFirestore
  ) {}

  async login(Auth: auth) {
    try {
      const resolve = await this.authFire.signInWithEmailAndPassword(
        Auth.email,
        Auth.password
      );
      this.authSuccesufulity();
      localStorage.setItem('user', resolve.user?.uid as string);
    } catch (err) {}
  }

  async singUp(Auth: auth) {
    try {
      const resolve = await this.authFire.createUserWithEmailAndPassword(
        Auth.email,
        Auth.password
      );
      this.authSuccesufulity();
      localStorage.setItem('user', resolve.user?.uid as string);
    } catch (err) {}
  }

  isLoginLogiut() {
    this.authFire.authState.subscribe((result) => {
      if (result) {
        this.isAuthitication = true;
        this.authChange.next(true);
        this.router.navigate(['/content']);
      } else {
        this.isAuthitication = false;
        this.authChange.next(false);
        this.router.navigate(['/login']);
      }
    });
  }
  authSuccesufulity() {
    this.isAuthitication = true;
    this.authChange.next(true);
    this.router.navigate(['/running']);
  }
  isAuth() {
    return this.isAuthitication;
  }

  logOut() {
    this.authFire.signOut();
    localStorage.removeItem('user');
    this.isAuthitication = false;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }
}
