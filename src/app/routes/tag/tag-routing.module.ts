import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagIndexComponent } from './index/index.component';

const routes: Routes = [{ path: 'index', component: TagIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagRoutingModule {}
