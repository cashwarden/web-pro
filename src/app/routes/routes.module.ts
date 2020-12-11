import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';
// single pages
import { CallbackComponent } from './callback/callback.component';
// dashboard pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserConfirmEmailComponent } from './passport/confirm-email/confirm-email.component';
import { UserLockComponent } from './passport/lock/lock.component';
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserPasswordResetComponent } from './passport/password-reset/password-reset.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
import { UserRegisterComponent } from './passport/register/register.component';
import { UserRequestPasswordResetComponent } from './passport/request-password-reset/request-password-reset.component';
import { RouteRoutingModule } from './routes-routing.module';

const COMPONENTS = [
  DashboardComponent,
  // passport pages
  UserLoginComponent,
  UserRequestPasswordResetComponent,
  UserRegisterComponent,
  UserConfirmEmailComponent,
  UserPasswordResetComponent,
  UserRegisterResultComponent,
  // single pages
  CallbackComponent,
  UserLockComponent,
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, RouteRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
})
export class RoutesModule {}
