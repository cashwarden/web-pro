import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
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
];
const COMPONENTS_NOROUNT = [SettingsRulesFormComponent, SettingsTagsEditComponent, SettingsTagsViewComponent];

@NgModule({
  imports: [SharedModule, SettingsRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
})
export class SettingsModule {}
