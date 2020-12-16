import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LedgerConfirmJoinComponent } from './confirm-join/confirm-join.component';
import { LedgerIndexComponent } from './index/index.component';
import { LedgerMemberComponent } from './member/member.component';

const routes: Routes = [
  { path: 'index', component: LedgerIndexComponent },
  { path: 'member', component: LedgerMemberComponent },
  { path: 'confirm-join', component: LedgerConfirmJoinComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LedgerRoutingModule {}
