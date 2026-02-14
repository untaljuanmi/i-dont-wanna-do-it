import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import {
  MyCardComponent,
  MyCardContentComponent,
  MyCardHeaderComponent,
  MyFormErrorComponent,
  MyFormFieldComponent,
} from '../../../library';
import { AuthService } from '../../services';

export interface SignUpInterface {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-sign-up',
  imports: [
    TranslatePipe,
    ReactiveFormsModule,
    RouterLink,
    MyCardComponent,
    MyCardContentComponent,
    MyCardHeaderComponent,
    MyFormErrorComponent,
    MyFormFieldComponent,
  ],
  templateUrl: './sign-up.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignUpComponent {
  private _authService = inject(AuthService);

  private _formBuilder = inject(FormBuilder);

  form = this._formBuilder.group<SignUpInterface>({
    email: this._formBuilder.control(null, [Validators.required, Validators.email]),
    password: this._formBuilder.control(null, Validators.required),
  });

  onClickSignUp(): void {
    if (this.form.invalid) {
      this.markAllAsTouched();
      return;
    }

    const { email, password } = this.form.value;

    if (!email || !password) {
      this.markAllAsTouched();
      return;
    }

    this._authService.signUp(email, password);
  }

  private markAllAsTouched(): void {
    this.form.markAllAsTouched();
    this.form.get('email')?.updateValueAndValidity();
    this.form.get('password')?.updateValueAndValidity();
  }
}
