import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetIndexComponent } from './index/index.component';

const routes: Routes = [{ path: 'index', component: BudgetIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetRoutingModule {}
