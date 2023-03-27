import { ValidationErrors, FormGroup, ValidatorFn } from '@angular/forms';

export class CustomValidators {
    static PasswordsNotSame(passwordControlName: string, confirmPasswordControlName: string) {
        return (group: FormGroup): void | null => {
            const pass = group.controls[passwordControlName].value;
            const confirmPass = group.controls[confirmPasswordControlName].value;
            if (confirmPass === null || confirmPass.length === 0) {
              return null;
            }
            return pass === confirmPass ? group.controls[confirmPasswordControlName].setErrors(null) : group.controls[confirmPasswordControlName].setErrors({ passwordsNotSame: true });
          };
    }
}