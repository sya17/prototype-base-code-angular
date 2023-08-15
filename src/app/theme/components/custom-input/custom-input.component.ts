import { Component, Input } from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent {
  @Input() placeholder: string = '';
  @Input() controlName: string = '';
  @Input() parentForm: FormGroup | undefined;
}
