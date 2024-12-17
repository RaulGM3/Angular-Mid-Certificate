import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';


@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.sass'
})
export class FormsComponent {
  myControl = new FormControl('', {
    validators: [this.validateZipCode],
    updateOn: 'change'
  });
  // myControl = new FormControl('Default Value', {updateOn: 'blur'});});

  validateZipCode (control: AbstractControl): ValidationErrors | null {
    if (control.value && control.value.match(/^\d{5}$/)) {
      return null;
    } else {
      return {invalidZip: true};
    }
  }
}
