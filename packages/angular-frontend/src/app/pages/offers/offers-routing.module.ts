import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffersListComponent } from './offers-list/offers-list.component';
import { OfferCreateComponent } from './offer-create/offer-create.component';

const routes: Routes = [
  { path: '', component: OffersListComponent },
  { path: 'create', component: OfferCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule { }
