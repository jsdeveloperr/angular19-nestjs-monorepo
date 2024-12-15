import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { OffersService } from '../../../services/offers.service';

@Component({
  selector: 'app-offers-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NzTableModule,
    NzButtonModule,
  ],
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss'],
})
export class OffersListComponent implements OnInit {
  offers = [] as any;

  constructor(private offersService: OffersService) {}

  ngOnInit(): void {
    this.offersService.getOffers().subscribe((data) => {
      this.offers = data;
    });
  }

  getConvertedSize(size: number, unit: string): string {
    if (unit === 'CM') {
      return `${this.offersService.convertToInches(size).toFixed(2)} IN`;
    } else if (unit === 'IN') {
      return `${this.offersService.convertToCm(size).toFixed(2)} CM`;
    }
    return `${size} ${unit}`;
  }

  getConvertedWeight(weight: number, unit: string): string {
    if (unit === 'KG') {
      return `${this.offersService.convertToLb(weight).toFixed(2)} LB`;
    } else if (unit === 'LB') {
      return `${this.offersService.convertToKg(weight).toFixed(2)} KG`;
    }
    return `${weight} ${unit}`;
  }

}
