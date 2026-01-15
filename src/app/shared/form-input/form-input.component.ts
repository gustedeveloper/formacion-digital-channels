import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormErrorService } from 'src/app/core/services/form-error.service';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
})
export class FormInputComponent {
  @Input() label!: string;
  @Input() type: 'text' | 'password' = 'text';
  @Input() control!: FormControl;
  @Input() placeholder = '';

  constructor(public formErrorService: FormErrorService) {}
}
