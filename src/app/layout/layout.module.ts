import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { LayoutDefaultComponent } from './default/default.component';
import { HeaderFullScreenComponent } from './default/header/components/fullscreen.component';
import { HeaderI18nComponent } from './default/header/components/i18n.component';
import { HeaderInputComponent } from './default/header/components/input.component';
import { HeaderNotifyComponent } from './default/header/components/notify.component';
import { HeaderStorageComponent } from './default/header/components/storage.component';
import { HeaderTaskComponent } from './default/header/components/task.component';
import { HeaderUserComponent } from './default/header/components/user.component';
import { HeaderComponent } from './default/header/header.component';
import { SettingDrawerItemComponent } from './default/setting-drawer/setting-drawer-item.component';
import { SettingDrawerComponent } from './default/setting-drawer/setting-drawer.component';
import { SidebarComponent } from './default/sidebar/sidebar.component';
import { LayoutFullScreenComponent } from './fullscreen/fullscreen.component';

const SETTINGDRAWER = [SettingDrawerComponent, SettingDrawerItemComponent];

const COMPONENTS = [LayoutDefaultComponent, LayoutFullScreenComponent, HeaderComponent, SidebarComponent, ...SETTINGDRAWER];

const HEADERCOMPONENTS = [
  HeaderInputComponent,
  HeaderNotifyComponent,
  HeaderTaskComponent,
  HeaderFullScreenComponent,
  HeaderI18nComponent,
  HeaderStorageComponent,
  HeaderUserComponent,
];

// passport
import { LayoutPassportComponent } from './passport/passport.component';
const PASSPORT = [LayoutPassportComponent];

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS, ...HEADERCOMPONENTS, ...PASSPORT],
  exports: [...COMPONENTS, ...PASSPORT],
})
export class LayoutModule {}
