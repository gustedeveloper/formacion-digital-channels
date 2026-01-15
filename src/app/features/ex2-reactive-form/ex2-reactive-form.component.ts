import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs';
import { Role } from 'src/app/core/interfaces/roles.model';
import { FormSubmitService } from 'src/app/core/services/form-submit.service';

@Component({
  selector: 'app-ex2-reactive-form',
  templateUrl: './ex2-reactive-form.component.html',
  styleUrls: ['./ex2-reactive-form.component.css'],
})
export class Ex2ReactiveFormComponent {
  submitting = false;
  successMessage: string | null = null;

  profileForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    username: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    role: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private formSubmitService: FormSubmitService,
    private snackBar: MatSnackBar
  ) {}

  roles: Role[] = [
    { label: 'Admin', value: 'admin' },
    { label: 'User', value: 'user' },
    { label: 'Guest', value: 'guest' },
  ];

  submit() {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    this.submitting = true;
    this.formSubmitService
      .submit(this.profileForm.value)
      .pipe(finalize(() => (this.submitting = false)))
      .subscribe({
        next: () => {
          this.snackBar.open('Formulario enviado correctamente ✅', 'Cerrar', {
            duration: 1500,
          });

          this.profileForm.reset();
        },
      });
  }
}
