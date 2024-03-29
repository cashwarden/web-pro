import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalHelper, SettingsService, User, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { PricingFormComponent } from '../form/form.component';

@Component({
  selector: 'app-pricing-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingIndexComponent implements OnInit {
  record: any;
  listOfData = [
    {
      key: '1',
      action: '无限量记录',
      pro: '✅',
      free: '✅',
    },
    {
      key: '1',
      action: '小程序记账',
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
      action: 'Telegram 记账',
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
      free: '1 个',
    },
    {
      key: '1',
      action: '账户',
      pro: '无限',
      free: '5 个',
    },
    {
      key: '1',
      action: '定时记账',
      pro: '无限',
      free: '1 个',
    },
    {
      key: '1',
      action: '规则',
      pro: '无限',
      free: '5 个',
    },
    {
      key: '1',
      action: 'AA 账本',
      pro: '✅',
      free: '❌',
    },
    {
      key: '1',
      action: '共享账本',
      pro: '✅',
      free: '❌',
    },
    {
      key: '1',
      action: '预算',
      pro: '✅',
      free: '❌',
    },
    {
      key: '1',
      action: '投资类型账户（2022Q4）',
      pro: '✅',
      free: '❌',
    },
    {
      key: '1',
      action: '愿望清单',
      pro: '✅',
      free: '❌',
    },
    {
      key: '1',
      action: '日历图',
      pro: '✅',
      free: '❌',
    },
    {
      key: '1',
      action: 'API',
      pro: '✅',
      free: '❌',
    },
    {
      key: '1',
      action: '多币种',
      pro: '✅',
      free: '❌',
    },
  ];

  get user(): User {
    return this.settings.user;
  }

  constructor(
    private settings: SettingsService,
    private msg: NzMessageService,
    private modalHelper: ModalHelper,
    private http: _HttpClient,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.http.get('/api/users/pro').subscribe((res) => {
      this.record = res.data;

      this.cdr.detectChanges();
    });
  }

  buy(): void {
    this.modalHelper.static(PricingFormComponent).subscribe((res) => {
      if (res) {
        this.getData();
        this.msg.info('支付成功');
      }
    });
  }
}
