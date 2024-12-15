import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { LoadingService } from '../../../services/loading.service';
import { DimensionsService } from '../../../services/dimensions.service';

@Component({
  selector: 'app-dimension-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NzButtonModule,
    NzFormModule,
    NzSelectModule,
    NzInputModule,
    NzAutocompleteModule,
    NzToolTipModule,
  ],
  templateUrl: './dimension-create.component.html',
  styleUrl: './dimension-create.component.scss'
})
export class DimensionCreateComponent {
  dimensionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private notification: NzNotificationService,
    public loadingService: LoadingService,
    private dimensionsService: DimensionsService) {
    this.dimensionForm = this.fb.group({
      type: ['', Validators.required],
      width: [null, [Validators.required, Validators.min(1)]],
      length: [null, [Validators.required, Validators.min(1)]],
      height: [null, [Validators.required, Validators.min(1)]],
    });
  }

  capitalizeFirstLetter(controlName: string): void {
    const control = this.dimensionForm.get(controlName);
    if (control) {
      const value = control.value || '';
      control.setValue(value.charAt(0).toUpperCase() + value.slice(1));
    }
  }

  addNewDimension(): void {
    if (this.dimensionForm.valid) {
      this.dimensionsService.createDimension(this.dimensionForm.value).subscribe({
        next: () => {
          this.notification.success('Success', 'Dimension successfully created!');
          this.dimensionForm.reset();
        },
        error: (err) => {
          console.error('Failed to add dimension:', err);
          this.notification.error('Error', 'Failed to create dimension. Please try again.');
        }
      });
    }
  }

}
