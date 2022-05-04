import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LedgerIndexComponent } from './index/index.component';

const routes: Routes = [
  { path: 'index', component: LedgerIndexComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LedgerRoutingModule { }
