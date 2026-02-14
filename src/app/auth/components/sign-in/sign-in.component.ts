import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { isNotAnEmailValidator, isRequiredValidator } from '../../../library';
import { AuthService } from '../../services';

export interface SignInInterface {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-sign-in',
  imports: [TranslatePipe, ReactiveFormsModule, RouterLink],
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

  isRequired(field: string): boolean {
    return isRequiredValidator(this.form, field);
  }

  isNotAnEmail(field: string): boolean {
    return isNotAnEmailValidator(this.form, field);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAsTouched();
      return;
    }

    const { email, password } = this.form.value;

    if (!email || !password) {
      this.form.markAsTouched();
      return;
    }

    this._authService.signIn(email, password);
  }
}
