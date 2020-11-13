import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { RuleRoutingModule } from './rule-routing.module';
import { RuleIndexComponent } from './index/index.component';
import { RuleFormComponent } from './form/form.component';

const COMPONENTS = [RuleIndexComponent];
const COMPONENTS_NOROUNT = [RuleFormComponent];

@NgModule({
  imports: [SharedModule, RuleRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
})
export class RuleModule {}
