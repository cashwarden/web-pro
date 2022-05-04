import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberIndexComponent } from './index/index.component';

const routes: Routes = [

  { path: 'index', component: MemberIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
