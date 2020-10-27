import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetIndexComponent } from './index/index.component';
import { BudgetFormComponent } from './form/form.component';

const COMPONENTS = [BudgetIndexComponent];
const COMPONENTS_NOROUNT = [BudgetFormComponent];

@NgModule({
  imports: [SharedModule, BudgetRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
})
export class BudgetModule {}
