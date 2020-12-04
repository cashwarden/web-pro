import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RuleIndexComponent } from './index/index.component';

const routes: Routes = [{ path: 'index', component: RuleIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RuleRoutingModule {}
