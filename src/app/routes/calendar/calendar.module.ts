import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarIndexComponent } from './index/index.component';

const COMPONENTS: Type<void>[] = [
  CalendarIndexComponent];

@NgModule({
  imports: [
    SharedModule,
    CalendarRoutingModule
  ],
  declarations: COMPONENTS,
})
export class CalendarModule { }
