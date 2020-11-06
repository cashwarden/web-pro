import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryIndexComponent } from './index/index.component';
import { CategoryFormComponent } from './form/form.component';

const COMPONENTS = [CategoryIndexComponent];
const COMPONENTS_NOROUNT = [CategoryFormComponent];

@NgModule({
  imports: [SharedModule, CategoryRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
})
export class CategoryModule {}
