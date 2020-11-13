import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { TagRoutingModule } from './tag-routing.module';
import { TagFormComponent } from './form/form.component';
import { TagIndexComponent } from './index/index.component';

const COMPONENTS = [TagIndexComponent];
const COMPONENTS_NOROUNT = [TagFormComponent];

@NgModule({
  imports: [SharedModule, TagRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
})
export class TagModule {}
