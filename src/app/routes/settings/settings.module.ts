import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { SettingsCategoriesComponent } from './categories/categories.component';
import { SettingsCategoriesEditComponent } from './categories/edit/edit.component';
import { SettingsCategoriesViewComponent } from './categories/view/view.component';
import { SettingsBaseComponent } from './personal/base/base.component';
import { SettingsBindingComponent } from './personal/binding/binding.component';
import { SettingsPasswordComponent } from './personal/password/password.component';
import { SettingsPersonalComponent } from './personal/personal.component';
import { SettingsRulesFormComponent } from './rules/form/form.component';
import { SettingsRulesComponent } from './rules/rules.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsTagsEditComponent } from './tags/edit/edit.component';
import { SettingsTagsComponent } from './tags/tags.component';
import { SettingsTagsViewComponent } from './tags/view/view.component';

const COMPONENTS = [
  SettingsRulesComponent,
  SettingsPersonalComponent,
  SettingsBaseComponent,
  SettingsBindingComponent,
  SettingsPasswordComponent,
  SettingsTagsComponent,
  SettingsCategoriesComponent,
];
const COMPONENTS_NOROUNT = [
  SettingsRulesFormComponent,
  SettingsTagsEditComponent,
  SettingsTagsViewComponent,
  SettingsCategoriesEditComponent,
  SettingsCategoriesViewComponent,
];

@NgModule({
  imports: [SharedModule, SettingsRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
})
export class SettingsModule {}
