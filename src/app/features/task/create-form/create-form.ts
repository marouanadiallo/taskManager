import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

// Material Standalone Components
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatFormField, MatLabel, MatError, MatPrefix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    // Card
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    // Form Field
    MatFormField,
    MatLabel,
    MatError,
    MatPrefix,
    // Input
    MatInput,
    // Button
    MatButton,
    // Select
    MatSelect,
    MatOption,
    // Icon
    MatIcon
  ],
  templateUrl: './create-form.html',
  styleUrls: ['./create-form.scss']
})
export class CreateForm {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.taskForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      reference: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      status: ['pending', Validators.required]
    });
    
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      // Form value matches Task interface: { reference, name, description, status }
      const payload = {
        reference: this.taskForm.value.reference,
        name: this.taskForm.value.name,
        description: this.taskForm.value.description,
        status: this.taskForm.value.status
      };

      console.log('Form Submitted:', payload);
      // TODO: send payload to service
    } else {
      this.markFormGroupTouched(this.taskForm);
    }
  }

  onCancel(): void {
    this.taskForm.reset({
      name: '',
      reference: '',
      description: '',
      status: 'pending'
    });
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }

  getErrorMessage(fieldName: string): string {
    const control = this.taskForm.get(fieldName);

    if (control?.hasError('required')) {
      return `${fieldName} is required`;
    }

    if (control?.hasError('minlength')) {
      const minLength = control.errors?.['minlength'].requiredLength;
      return `Minimum ${minLength} characters required`;
    }

    return '';
  }
}
