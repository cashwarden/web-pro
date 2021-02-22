import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { AssetsRoutingModule } from './assets-routing.module';
import { AssetsIndexComponent } from './index/index.component';

const COMPONENTS: Type<void>[] = [AssetsIndexComponent];

@NgModule({
  imports: [SharedModule, AssetsRoutingModule],
  declarations: COMPONENTS,
})
export class AssetsModule {}
