import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryIndexComponent } from './index/index.component';

const routes: Routes = [{ path: 'index', component: CategoryIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
