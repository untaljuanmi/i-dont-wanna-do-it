import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { MyCardComponent, MyFormErrorComponent, MyFormFieldComponent } from '../../../library';
import { MyCardContentComponent } from '../../../library/my-card/components/my-card-content/my-card-content.component';
import { MyCardHeaderComponent } from '../../../library/my-card/components/my-card-header/my-card-header.component';
import { AuthService } from '../../services';

export interface SignInInterface {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-sign-in',
  imports: [
    TranslatePipe,
    ReactiveFormsModule,
    RouterLink,
    MyCardComponent,
    MyCardHeaderComponent,
    MyCardContentComponent,
    MyFormFieldComponent,
    MyFormErrorComponent,
  ],
  templateUrl: './sign-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignInComponent {
  private _authService = inject(AuthService);

  private _formBuilder = inject(FormBuilder);

  form = this._formBuilder.group<SignInInterface>({
    email: this._formBuilder.control(null, [Validators.required, Validators.email]),
    password: this._formBuilder.control(null, Validators.required),
  });

  onClickSignIn(): void {
    if (this.form.invalid) {
      this.markAllAsTouched();
      return;
    }

    const { email, password } = this.form.value;

    if (!email || !password) {
      this.markAllAsTouched();
      return;
    }

    this._authService.signIn(email, password);
  }

  private markAllAsTouched(): void {
    this.form.markAllAsTouched();
    this.form.get('email')?.updateValueAndValidity();
    this.form.get('password')?.updateValueAndValidity();
  }
}
