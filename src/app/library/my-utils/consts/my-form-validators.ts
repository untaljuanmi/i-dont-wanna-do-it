import { FormGroup } from '@angular/forms';

export const isRequiredValidator = (form: FormGroup, field: string): boolean => {
  const control = form.get(field);
  return !!control && control.touched && control.hasError('required');
};

export const isNotAnEmailValidator = (form: FormGroup, field: string): boolean => {
  const control = form.get(field);
  return !!control && control.touched && control.hasError('email');
};
