import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalHelper, SettingsService, User, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { PricingFormComponent } from '../form/form.component';

@Component({
  selector: 'app-pricing-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingIndexComponent {
  listOfData = [
    {
      key: '1',
      action: '无限量记录',
      pro: '✅',
      free: '✅',
    },
    {
      key: '1',
      action: '小程序记账（2021Q1）',
      pro: '✅',
      free: '✅',
    },
    {
      key: '1',
      action: '导入导出',
      pro: '✅',
      free: '✅',
    },
    {
      key: '1',
      action: '微信记账（2021）',
      pro: '✅',
      free: '✅',
    },
    {
      key: '1',
      action: 'Telegram 记账',
      pro: '✅',
      free: '✅',
    },
    {
      key: '1',
      action: 'App（2021）',
      pro: '✅',
      free: '✅',
    },
    {
      key: '1',
      action: '统计分析',
      pro: '✅',
      free: '✅',
    },
    {
      key: '1',
      action: '普通账本',
      pro: '无限',
      free: '1个',
    },
    {
      key: '1',
      action: '账户',
      pro: '无限',
      free: '5个',
    },
    {
      key: '1',
      action: '定时记账',
      pro: '无限',
      free: '1个',
    },
    {
      key: '1',
      action: '规则',
      pro: '无限',
      free: '5个',
    },
    {
      key: '1',
      action: 'AA 账本（2020Q4）',
      pro: '✅',
      free: '❌',
    },
    {
      key: '1',
      action: '共享账本（2020Q4）',
      pro: '✅',
      free: '❌',
    },
    {
      key: '1',
      action: '预算（2020Q4）',
      pro: '✅',
      free: '❌',
    },
    {
      key: '1',
      action: '投资类型账户（2021Q1）',
      pro: '✅',
      free: '❌',
    },
    {
      key: '1',
      action: '购物清单（2021Q1）',
      pro: '✅',
      free: '❌',
    },
    {
      key: '1',
      action: '日历图（2021Q1）',
      pro: '✅',
      free: '❌',
    },
    {
      key: '1',
      action: 'API（2021Q1）',
      pro: '✅',
      free: '❌',
    },
    {
      key: '1',
      action: '多币种（2021Q1）',
      pro: '✅',
      free: '❌',
    },
  ];

  get user(): User {
    return this.settings.user;
  }

  constructor(private settings: SettingsService, private msg: NzMessageService, private modalHelper: ModalHelper) {}

  buy(): void {
    this.modalHelper.static(PricingFormComponent).subscribe((res) => {
      if (res) {
        this.msg.info('支付成功');
      }
    });
  }
}
