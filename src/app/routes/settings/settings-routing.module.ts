import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsCategoriesComponent } from './categories/categories.component';
import { SettingsBaseComponent } from './personal/base/base.component';
import { SettingsBindingComponent } from './personal/binding/binding.component';
import { SettingsPasswordComponent } from './personal/password/password.component';
import { SettingsPersonalComponent } from './personal/personal.component';
import { SettingsRulesComponent } from './rules/rules.component';
import { SettingsTagsComponent } from './tags/tags.component';

const routes: Routes = [
  { path: 'rules', component: SettingsRulesComponent },
  {
    path: 'personal',
    component: SettingsPersonalComponent,
    children: [
      { path: '', redirectTo: 'base', pathMatch: 'full' },
      { path: 'base', component: SettingsBaseComponent },
      { path: 'binding', component: SettingsBindingComponent },
      { path: 'password', component: SettingsPasswordComponent },
    ],
  },
  { path: 'tags', component: SettingsTagsComponent },
  { path: 'categories', component: SettingsCategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
