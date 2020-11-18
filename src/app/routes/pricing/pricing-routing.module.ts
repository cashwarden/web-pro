import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingIndexComponent } from './index/index.component';

const routes: Routes = [{ path: 'index', component: PricingIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PricingRoutingModule {}
