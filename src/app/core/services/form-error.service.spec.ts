import { FormControl, Validators } from '@angular/forms';
import { FormErrorService } from './form-error.service';

describe('FormErrorService', () => {
  let service: FormErrorService;

  beforeEach(() => {
    service = new FormErrorService();
  });

  it('should return null if control is null', () => {
    const result = service.getErrorMessage(null);
    expect(result).toBeNull();
  });

  it('should return null if control has no errors', () => {
    const control = new FormControl('valid value');
    control.markAsTouched();

    const result = service.getErrorMessage(control);
    expect(result).toBeNull();
  });

  it('should return null if control is not touched', () => {
    const control = new FormControl('', Validators.required);

    const result = service.getErrorMessage(control);
    expect(result).toBeNull();
  });

  it('should return required error message', () => {
    const control = new FormControl('', Validators.required);
    control.markAsTouched();

    const result = service.getErrorMessage(control);
    expect(result).toBe('Este campo es obligatorio');
  });

  it('should return minlength error message', () => {
    const control = new FormControl('a', Validators.minLength(3));
    control.markAsTouched();

    const result = service.getErrorMessage(control);
    expect(result).toBe('El campo debe contener mínimo 3 caracteres');
  });

  it('should return default message for unknown error', () => {
    const control = new FormControl('');
    control.setErrors({ customError: true });
    control.markAsTouched();

    const result = service.getErrorMessage(control);
    expect(result).toBe('Campo inválido');
  });
});
