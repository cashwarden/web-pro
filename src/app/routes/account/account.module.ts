import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { AccountRoutingModule } from './account-routing.module';
import { AccountFormComponent } from './form/form.component';
import { AccountIndexComponent } from './index/index.component';
import { AccountViewComponent } from './view/view.component';

const COMPONENTS = [AccountIndexComponent, AccountViewComponent];
const COMPONENTS_NOROUNT = [AccountFormComponent];

@NgModule({
  imports: [SharedModule, AccountRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
})
export class AccountModule {}
