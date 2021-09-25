import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { CurrencyRoutingModule } from './currency-routing.module';
import { CurrencyIndexComponent } from './index/index.component';
import { CurrencyFormComponent } from './form/form.component';

const COMPONENTS: Type<void>[] = [
  CurrencyIndexComponent,
  CurrencyFormComponent];

@NgModule({
  imports: [
    SharedModule,
    CurrencyRoutingModule
  ],
  declarations: COMPONENTS,
})
export class CurrencyModule { }
