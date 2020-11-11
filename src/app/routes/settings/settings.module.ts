import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { SettingsBaseComponent } from './personal/base/base.component';
import { SettingsBindingComponent } from './personal/binding/binding.component';
import { SettingsPasswordComponent } from './personal/password/password.component';
import { SettingsPersonalComponent } from './personal/personal.component';
import { SettingsRoutingModule } from './settings-routing.module';

const COMPONENTS = [SettingsPersonalComponent, SettingsBaseComponent, SettingsBindingComponent, SettingsPasswordComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, SettingsRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
})
export class SettingsModule {}
