import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Role } from 'src/app/core/interfaces/roles.model';

@Component({
  selector: 'app-ex2-reactive-form',
  templateUrl: './ex2-reactive-form.component.html',
  styleUrls: ['./ex2-reactive-form.component.css'],
})
export class Ex2ReactiveFormComponent {
  constructor(private fb: FormBuilder) {}

  profileForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    username: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    role: ['', [Validators.required]],
  });

  roles: Role[] = [
    { label: 'Admin', value: 'admin' },
    { label: 'User', value: 'user' },
    { label: 'Guest', value: 'guest' },
  ];

  submit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      this.profileForm.reset();
    }
  }
}
