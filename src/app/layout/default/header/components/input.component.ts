import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnDestroy } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import format from 'date-fns/format';
import { NzNotificationService } from 'ng-zorro-antd/notification';
@Component({
  selector: 'header-input',
  template: `
    <nz-input-group [nzPrefix]="iconTpl" [nzSuffix]="loadingTpl">
      <ng-template #iconTpl>
        <i nz-icon [nzType]="focus ? 'arrow-down' : 'thunderbolt'"></i>
      </ng-template>
      <ng-template #loadingTpl>
        <i *ngIf="loading" nz-icon nzType="loading"></i>
      </ng-template>
      <input
        type="text"
        nz-input
        [(ngModel)]="description"
        (keyup.enter)="submit()"
        (focus)="qFocus()"
        (blur)="qBlur()"
        placeholder="快速记账"
      />
    </nz-input-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderInputComponent {
  description: string;
  qIpt: HTMLInputElement;
  loading = false;

  @HostBinding('class.alain-default__search-focus')
  focus = false;
  @HostBinding('class.alain-default__search-toggled')
  toggled = false;

  @Input()
  set toggleChange(value: boolean) {
    if (typeof value === 'undefined') {
      return;
    }
    this.toggled = true;
    this.focus = true;
    setTimeout(() => this.qIpt.focus(), 100);
  }

  constructor(private http: _HttpClient, private notification: NzNotificationService, private cdr: ChangeDetectorRef) {}

  qFocus(): void {
    this.focus = true;
  }

  qBlur(): void {
    this.focus = false;
    this.toggled = false;
  }

  submit() {
    const data = { description: this.description };
    this.http.post('/api/transactions/by-description?expand=ledger,category,fromAccount,toAccount', data).subscribe((res) => {
      if (res.code !== 0) {
        this.notification.create('error', '操作失败', res.message);
        return;
      }
      if (res.data.date) {
        const date = format(new Date(res.data.date), 'yyyy-MM-dd HH:mm');
        const toAccount = res.data.toAccount ? ` | 收款账户：${res.data.toAccount.name} ` : '';
        const fromAccount = res.data.fromAccount ? ` | 支付账户：${res.data.fromAccount.name} ` : '';

        this.notification.create(
          'success',
          '快速记账成功',
          `账本：${res.data.ledger.name} | 分类：${res.data.category.name} ${toAccount}  ${fromAccount} | 日期：${date}`,
        );
      } else {
        this.notification.create('success', '余额调整成功', `账号：${res.data.name}`);
      }

      this.description = '';
      this.cdr.detectChanges();
    });
  }
}
