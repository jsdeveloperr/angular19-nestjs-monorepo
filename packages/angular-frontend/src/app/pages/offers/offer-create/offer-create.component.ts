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
import { OffersService } from '../../../services/offers.service';
import { LoadingService } from '../../../services/loading.service';

@Component({
  selector: 'app-offer-create',
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
  templateUrl: './offer-create.component.html',
  styleUrls: ['./offer-create.component.scss'],
})
export class OfferCreateComponent {
  offerForm: FormGroup;
  dimensions: any[] = [];
  packageTypes: string[] = [];

  countries = ['USA', 'China', 'Turkey'];

  cities: { [key: string]: string[] } = {
    USA: ['New York', 'Los Angeles', 'Miami', 'Minnesota'],
    China: ['Beijing', 'Shanghai'],
    Turkey: ['Istanbul', 'Izmir'],
  };

  filteredCountries: string[] = [];
  filteredCities: string[] = [];

  calculationResult: any = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private offersService: OffersService,
    private notification: NzNotificationService,
    public loadingService: LoadingService) {
    this.offerForm = this.fb.group({
      mode: [null, [Validators.required]],
      movement_type: [null, [Validators.required]],
      incoterm: [null, [Validators.required]],
      country: [null, [Validators.required]],
      city: [null, [Validators.required]],
      package_type: [null, [Validators.required]],
      unit_1: [null, [Validators.required]],
      unit_2: [null, [Validators.required]],
      currency: [null, [Validators.required]],
    });
    this.filteredCountries = [...this.countries];
  }

  ngOnInit(): void {
    this.loadDimensions();
  }

  loadDimensions(): void {
    this.offersService.getDimensions().subscribe({
      next: (data) => {
        this.dimensions = data;
        this.packageTypes = data.map((dimension: any) => dimension.type);
      },
      error: (err) => {
        console.error('Failed to load dimensions:', err);
        this.notification.error('Error', err.error.message || 'Failed to load dimensions. Please try again.');
      },
    });
  }

  filterCountries(value: string): void {
    if (value) {
      this.filteredCountries = this.countries.filter(country =>
        country.toLowerCase().includes(value.toLowerCase())
      );
    } else {
      this.filteredCountries = [...this.countries];
    }
  }

  updateCities(): void {
    const selectedCountry = this.offerForm.get('country')?.value;

    if (selectedCountry && this.cities[selectedCountry]) {
      this.filteredCities = [...this.cities[selectedCountry]];
    } else {
      this.filteredCities = [];
    }

    this.offerForm.get('city')?.reset();
  }

  filterCities(value: string): void {
    const selectedCountry = this.offerForm.get('country')?.value;

    if (selectedCountry && this.cities[selectedCountry]) {
      this.filteredCities = this.cities[selectedCountry].filter(city =>
        city.toLowerCase().includes(value.toLowerCase())
      );
    }
  }

  showAllCountries(): void {
    this.filteredCountries = [...this.countries];
  }

  showAllCities(): void {
    const selectedCountry = this.offerForm.get('country')?.value;
    if (selectedCountry && this.cities[selectedCountry]) {
      this.filteredCities = [...this.cities[selectedCountry]];
    } else {
      this.filteredCities = [];
    }
  }

  validateMode(palletCount: number): void {
    const mode = this.offerForm.get('mode')?.value;

    if (mode === 'LCL' && palletCount >= 24) {
      this.offerForm.get('mode')?.setErrors({ invalidMode: true });
      this.notification.warning('Mode Error', 'LCL cannot handle 24 or more pallets. Please select FCL.');
    } else if (mode === 'FCL' && palletCount > 24) {
      this.offerForm.get('mode')?.setErrors({ invalidMode: true });
      this.notification.warning('Mode Error', 'FCL cannot handle more than 24 pallets.');
    }
  }

  calculateDimensions(): void {
    if (!this.offerForm.valid) {
      this.notification.error('Error', 'Please complete the form before calculating.');
      return;
    }

    const payload = {
      carton: this.dimensions.find((d) => d.type === 'Carton') || null,
      box: this.dimensions.find((d) => d.type === 'Box') || null,
      pallet: this.dimensions.find((d) => d.type === 'Pallet') || null,
      type: this.offerForm.get('package_type')?.value,
      mode: this.offerForm.get('mode')?.value,
      unit: this.offerForm.get('unit_1')?.value,
    };

    this.offersService.calculateDimensions(payload).subscribe({
      next: (result) => {
        this.calculationResult = result;
        if (result?.palletCount) {
          this.validateMode(result.palletCount);
        }

        this.notification.success('Success', 'Calculation completed successfully!');
      },
      error: (err) => {
        console.error('Calculation error:', err);
        this.notification.error('Error', err.error.message || 'Failed to calculate dimensions.');
      },
    });
  }

  saveOffer(): void {
    if (!this.calculationResult) {
      this.notification.error('Error', 'Please calculate dimensions first.');
      return;
    }

    const offerPayload = {
      ...this.offerForm.value,
      pallet_count: this.calculationResult.palletCount,
      size: this.calculationResult.size || 0,
      weight: this.calculationResult.weight || 0,
    };

    this.offersService.createOffer(offerPayload).subscribe({
      next: () => {
        this.notification.success('Success', 'Offer successfully created!');
        this.router.navigate(['/offers']);
      },
      error: (err) => {
        console.error('Create offer error:', err);
        this.notification.error('Error', 'Failed to create offer. Please try again.');
      },
    });
  }
}
