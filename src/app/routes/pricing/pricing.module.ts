import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { PricingRoutingModule } from './pricing-routing.module';
import { PricingIndexComponent } from './index/index.component';
import { PricingFormComponent } from './form/form.component';

const COMPONENTS = [PricingIndexComponent];
const COMPONENTS_NOROUNT = [PricingFormComponent];

@NgModule({
  imports: [SharedModule, PricingRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
})
export class PricingModule {}
