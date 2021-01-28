import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsBaseComponent } from './personal/base/base.component';
import { SettingsBindingComponent } from './personal/binding/binding.component';
import { SettingsPasswordComponent } from './personal/password/password.component';
import { SettingsPersonalComponent } from './personal/personal.component';
import { SettingsReportComponent } from './personal/report/report.component';

const routes: Routes = [
  {
    path: 'personal',
    component: SettingsPersonalComponent,
    children: [
      { path: '', redirectTo: 'base', pathMatch: 'full' },
      { path: 'base', component: SettingsBaseComponent },
      { path: 'binding', component: SettingsBindingComponent },
      { path: 'password', component: SettingsPasswordComponent },
      { path: 'report', component: SettingsReportComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
