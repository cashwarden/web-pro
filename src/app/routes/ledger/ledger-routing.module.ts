import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LedgerIndexComponent } from './index/index.component';
import { LedgerMemberComponent } from './member/member.component';

const routes: Routes = [
  { path: 'index', component: LedgerIndexComponent },
  { path: 'member', component: LedgerMemberComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LedgerRoutingModule {}
