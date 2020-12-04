import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountIndexComponent } from './index/index.component';
import { AccountViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'index', component: AccountIndexComponent },
  { path: 'view/:id', component: AccountViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
