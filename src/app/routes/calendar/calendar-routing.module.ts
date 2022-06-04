import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarIndexComponent } from './index/index.component';

const routes: Routes = [

  { path: 'index', component: CalendarIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
