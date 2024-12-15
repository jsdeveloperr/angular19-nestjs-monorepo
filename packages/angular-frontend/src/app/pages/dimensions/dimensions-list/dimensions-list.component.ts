import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DimensionsService } from '../../../services/dimensions.service';

@Component({
  selector: 'app-dimensions-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NzTableModule,
    NzButtonModule,
  ],
  templateUrl: './dimensions-list.component.html',
  styleUrl: './dimensions-list.component.scss'
})
export class DimensionsListComponent implements OnInit {
  dimensions: any[] = [];

  constructor(private dimensionsService: DimensionsService) {}

  ngOnInit(): void {
    this.fetchDimensions();
  }

  fetchDimensions(): void {
    this.dimensionsService.getDimensions().subscribe({
      next: (data) => {
        this.dimensions = data;
      },
      error: (err) => {
        console.error('Failed to fetch dimensions:', err);
      }
    });
  }

  addNewDimension(): void {
    const newDimension = { type: 'Carton', width: 10, length: 10, height: 10 };
    this.dimensionsService.createDimension(newDimension).subscribe({
      next: () => {
        this.fetchDimensions();
      },
      error: (err) => {
        console.error('Failed to add dimension:', err);
      }
    });
  }
}
