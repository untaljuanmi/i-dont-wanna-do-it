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
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isSigningUp = signal<boolean>(false);
  isSigningIn = signal<boolean>(false);
  isSigningOut = signal<boolean>(false);

  private _auth = inject(Auth);
  private _router = inject(Router);

  get authState$(): Observable<User | null> {
    return authState(this._auth);
  }

  signIn(email: string, password: string): void {
    if (!email || !password) return;

    this.isSigningIn.set(true);

    signInWithEmailAndPassword(this._auth, email, password)
      .then(() => this._router.navigate(['/home']).then())
      .catch((error: Error) => console.error('Error during sign in:', error))
      .finally(() => this.isSigningIn.set(false));
  }

  signUp(email: string, password: string): void {
    if (!email || !password) return;

    this.isSigningUp.set(true);

    createUserWithEmailAndPassword(this._auth, email, password)
      .then(() => this._router.navigate(['/home']).then())
      .catch((error: Error) => console.error('Error during sign up:', error))
      .finally(() => this.isSigningUp.set(false));
  }

  signOut(): void {
    this.isSigningOut.set(true);

    signOut(this._auth)
      .then(() => this._router.navigate(['/auth/sign-in']).then())
      .catch((error: Error) => console.error('Error during sign out:', error))
      .finally(() => this.isSigningOut.set(false));
  }
}
