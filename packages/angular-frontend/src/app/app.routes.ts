import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/offers', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent),
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'offers',
        loadChildren: () => import('./pages/offers/offers-routing.module').then((m) => m.OffersRoutingModule),
      },
      {
        path: 'dimensions',
        loadChildren: () => import('./pages/dimensions/dimensions-routing.module').then((m) => m.DimensionsRoutingModule),
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];
