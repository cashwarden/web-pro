import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishListIndexComponent } from './index/index.component';

const routes: Routes = [{ path: 'index', component: WishListIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WishListRoutingModule {}
