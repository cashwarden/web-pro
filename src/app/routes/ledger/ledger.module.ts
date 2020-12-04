import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { LedgerFormComponent } from './form/form.component';
import { LedgerIndexComponent } from './index/index.component';
import { LedgerRoutingModule } from './ledger-routing.module';
import { LedgerMemberFormComponent } from './member/form/form.component';
import { LedgerMemberComponent } from './member/member.component';

const COMPONENTS = [LedgerIndexComponent, LedgerMemberComponent];
const COMPONENTS_NOROUNT = [LedgerFormComponent, LedgerMemberFormComponent];

@NgModule({
  imports: [SharedModule, LedgerRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
})
export class LedgerModule {}
