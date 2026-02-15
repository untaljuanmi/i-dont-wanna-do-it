import { inject, Injectable, signal } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import FirebaseError = firebase.FirebaseError;
import { TranslateService } from '@ngx-translate/core';

import { MyToastService } from '../../../library/my-toast';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _auth = inject(Auth);
  private _router = inject(Router);
  private _translateService = inject(TranslateService);
  private _myToastService = inject(MyToastService);

  isSigningUp = signal<boolean>(false);
  isSigningIn = signal<boolean>(false);
  isSigningOut = signal<boolean>(false);

  get authState$(): Observable<User | null> {
    return authState(this._auth);
  }

  signIn(email: string, password: string): void {
    if (!email || !password) return;

    this.isSigningIn.set(true);

    signInWithEmailAndPassword(this._auth, email, password)
      .then(() => this._router.navigate(['/home']).then())
      .catch((error: FirebaseError) => this.manageError(error))
      .finally(() => this.isSigningIn.set(false));
  }

  private manageError(error: FirebaseError): void {
    const message: string = this._translateService.instant(`auth.errors.${error.code}`);
    this._myToastService.error(message, 5000);
  }

  signUp(email: string, password: string): void {
    if (!email || !password) return;

    this.isSigningUp.set(true);

    createUserWithEmailAndPassword(this._auth, email, password)
      .then(() => this._router.navigate(['/home']).then())
      .catch((error: FirebaseError) => this.manageError(error))
      .finally(() => this.isSigningUp.set(false));
  }

  signOut(): void {
    this.isSigningOut.set(true);

    signOut(this._auth)
      .then(() => this._router.navigate(['/auth/sign-in']).then())
      .catch((error: FirebaseError) => this.manageError(error))
      .finally(() => this.isSigningOut.set(false));
  }
}
