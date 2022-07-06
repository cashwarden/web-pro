import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { MemberFormComponent } from './form/form.component';
import { MemberIndexComponent } from './index/index.component';
import { MemberRoutingModule } from './member-routing.module';

const COMPONENTS: Type<void>[] = [
  MemberIndexComponent,
  MemberFormComponent];

@NgModule({
  imports: [
    SharedModule,
    MemberRoutingModule
  ],
  declarations: COMPONENTS,
})
export class MemberModule { }
