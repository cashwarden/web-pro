import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JWTGuard } from '@delon/auth';
import { environment } from '@env/environment';
// layout
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { LayoutFullScreenComponent } from '../layout/fullscreen/fullscreen.component';
import { LayoutPassportComponent } from '../layout/passport/passport.component';
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

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    canActivate: [JWTGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, data: { title: '仪表盘' } },
      { path: 'account', loadChildren: () => import('./account/account.module').then((m) => m.AccountModule) },
      { path: 'category', loadChildren: () => import('./category/category.module').then((m) => m.CategoryModule) },
      { path: 'tag', loadChildren: () => import('./tag/tag.module').then((m) => m.TagModule) },
      { path: 'ledger', loadChildren: () => import('./ledger/ledger.module').then((m) => m.LedgerModule) },
      { path: 'record', loadChildren: () => import('./record/record.module').then((m) => m.RecordModule) },
      { path: 'budget', loadChildren: () => import('./budget/budget.module').then((m) => m.BudgetModule) },
      {
        path: 'recurrence',
        loadChildren: () => import('./recurrence/recurrence.module').then((m) => m.RecurrenceModule),
      },
      { path: 'analysis', loadChildren: () => import('./analysis/analysis.module').then((m) => m.AnalysisModule) },
      { path: 'exception', loadChildren: () => import('./exception/exception.module').then((m) => m.ExceptionModule) },
      { path: 'settings', loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule) },
      { path: 'rule', loadChildren: () => import('./rule/rule.module').then((m) => m.RuleModule) },
      { path: 'pricing', loadChildren: () => import('./pricing/pricing.module').then((m) => m.PricingModule) },
      { path: 'wish-list', loadChildren: () => import('./wish-list/wish-list.module').then((m) => m.WishListModule) },
      // 业务子模块
      // { path: 'widgets', loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule) },
      { path: 'assets', loadChildren: () => import('./assets/assets.module').then((m) => m.AssetsModule) },
      { path: 'currency', loadChildren: () => import('./currency/currency.module').then((m) => m.CurrencyModule) },
      { path: 'member', loadChildren: () => import('./member/member.module').then((m) => m.MemberModule) },
    { path: 'calendar', loadChildren: () => import('./calendar/calendar.module').then((m) => m.CalendarModule) },],
  },
  // 全屏布局
  // {
  //     path: 'fullscreen',
  //     component: LayoutFullScreenComponent,
  //     children: [
  //     ]
  // },
  // passport
  {
    path: 'passport',
    component: LayoutPassportComponent,
    children: [
      { path: 'login', component: UserLoginComponent, data: { title: '登录' } },
      { path: 'register', component: UserRegisterComponent, data: { title: '注册' } },
      { path: 'register-result', component: UserRegisterResultComponent, data: { title: '注册结果' } },
      { path: 'confirm-email', component: UserConfirmEmailComponent, data: { title: '确认邮箱' } },
      { path: 'lock', component: UserLockComponent, data: { title: '锁屏' } },
      { path: 'request-password-reset', component: UserRequestPasswordResetComponent, data: { title: '找回密码' } },
      { path: 'password-reset', component: UserPasswordResetComponent, data: { title: '重置密码' } },
    ],
  },
  // 单页不包裹 Layout
  { path: 'callback/:type', component: CallbackComponent },
  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
      // Pls refer to https://ng-alain.com/components/reuse-tab
      scrollPositionRestoration: 'top',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class RouteRoutingModule {
}
