import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsIndexComponent } from './index/index.component';

const routes: Routes = [{ path: 'index', component: AssetsIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetsRoutingModule {}
