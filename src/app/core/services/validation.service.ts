import { FormGroup, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  /**
   * Get validation error message
   * @param validatorName control name
   * @param validatorValue validator
   * @returns error message
   */
  static getValidationErrorMessage(
    validatorName: string,
    validatorValue?: any
  ): string {
    let config = {
      required: 'This field is required',
      email: 'Invalid email address.',
      validatePhoneNumber: 'Invalid mobile number.',
      minlength: `Minimum field length ${validatorValue.requiredLength} characters.`,
      maxlength: `Maximum field length ${validatorValue.requiredLength} characters.`,
      pattern: 'Invalid pattern',
    };

    return config[validatorName as keyof typeof config];
  }

  /**
   * Checking control validation
   * @param form form group
   * @param controlName form control name
   * @param validationType validator
   * @param submitted is form submitted
   * @returns valid or not
   */
  static isControlHasError(
    form: FormGroup,
    controlName: string,
    validationType?: string,
    submitted: boolean = false
  ): boolean {
    const control = form.controls[controlName];
    return !control ? false : validationType
      ? control.hasError(validationType) : control.invalid && (control.dirty || control.touched || submitted);
  }



  static checkPasswords(form: any): ValidationErrors | null {
    let pass = form.get('new_password').value;
    let confirmPass = form.get('new_password_confirmation').value;
    return pass === confirmPass ? null : { notSame: true };
  }
}
