import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { LedgerFormComponent } from './form/form.component';
import { LedgerIndexComponent } from './index/index.component';
import { LedgerRoutingModule } from './ledger-routing.module';

const COMPONENTS = [LedgerIndexComponent];
const COMPONENTS_NOROUNT = [LedgerFormComponent];

@NgModule({
  imports: [SharedModule, LedgerRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
})
export class LedgerModule { }
