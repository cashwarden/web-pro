import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { WishListFormComponent } from './form/form.component';
import { WishListIndexComponent } from './index/index.component';
import { WishListRoutingModule } from './wish-list-routing.module';

const COMPONENTS: Type<void>[] = [WishListIndexComponent];
const COMPONENTS_NOROUNT: Type<void>[] = [WishListFormComponent];

@NgModule({
  imports: [SharedModule, WishListRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
})
export class WishListModule {}
