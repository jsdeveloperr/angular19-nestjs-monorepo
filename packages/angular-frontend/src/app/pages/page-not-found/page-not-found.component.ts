import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';

@Component({
  standalone: true,
  selector: 'app-page-not-found',
  imports: [
    CommonModule,
    NzButtonModule,
    NzResultModule
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {
  constructor(private router: Router) {}

  goOffers(): void {
    this.router.navigate(['/offers']);
  }
}
