import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormErrorService {
  constructor() {}

  private errorMessages: Record<string, (error: any) => string> = {
    required: () => 'Este campo es obligatorio',
    minlength: (error) =>
      `El campo debe contener mínimo ${error.requiredLength} caracteres`,
  };

  getErrorMessage(control: AbstractControl | null): string | null {
    if (!control || !control.errors || !control.touched) {
      return null;
    }

    const errors: ValidationErrors = control.errors;
    const firstErrorKey = Object.keys(errors)[0];

    const errorValue = errors[firstErrorKey];
    const messageFactory = this.errorMessages[firstErrorKey];

    if (messageFactory) {
      const message = messageFactory(errorValue);
      return message;
    }
    return 'Campo inválido';
  }
}
