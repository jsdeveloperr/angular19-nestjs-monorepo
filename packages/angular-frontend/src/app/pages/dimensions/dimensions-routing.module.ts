import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DimensionCreateComponent } from './dimension-create/dimension-create.component';
import { DimensionsListComponent } from './dimensions-list/dimensions-list.component';

const routes: Routes = [
  { path: '', component: DimensionsListComponent },
  { path: 'create', component: DimensionCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DimensionsRoutingModule { }
