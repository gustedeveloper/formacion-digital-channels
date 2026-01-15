import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormErrorService } from 'src/app/core/services/form-error.service';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css'],
})
export class FormSelectComponent {
  @Input() label!: string;
  @Input() control!: FormControl;
  @Input() options!: { label: string; value: string }[];

  constructor(public formErrorService: FormErrorService) {}
}
