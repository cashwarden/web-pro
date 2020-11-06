import { Component, OnInit, ViewChild } from '@angular/core';
import { CacheService } from '@delon/cache';
import { SFComponent, SFRadioWidgetSchema, SFSchema, SFUISchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { params } from 'src/app/shared/params';

@Component({
  selector: 'app-ledger-form',
  templateUrl: './form.component.html',
})
export class LedgerMemberFormComponent implements OnInit {
  @ViewChild('sf', { static: false }) private sf: SFComponent;
  record: any = {};
  schema: SFSchema = {
    properties: {
      email: { type: 'string', format: 'email', title: '邮箱' },
      rule: {
        type: 'string',
        title: '权限',
        ui: {
          widget: 'radio',
          asyncData: () =>
            of([
              { label: '使用', value: 'editor' },
              { label: '查看', value: 'viewer' },
            ]).pipe(delay(100)),
        } as SFRadioWidgetSchema,
        default: 'editor',
      },
    },
    required: ['email'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 24 },
    },
  };

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, public http: _HttpClient, private cache: CacheService) {}

  ngOnInit(): void {
    if (this.record.id) {
      this.record.email = this.record.user.email;
      this.schema.properties.email.readOnly = true;
      this.sf.refreshSchema();
    }
  }

  save(value: any) {
    const url = this.record.id ? `/${this.record.id}` : '';
    const method = this.record.id ? 'put' : 'post';
    value.ledger_id = this.cache.getNone(params.cacheKey.defaultIdLedger);
    this.http.request(method, `/api/ledger/members${url}`, { body: value }).subscribe((res: any) => {
      if (res.code !== 0) {
        this.msgSrv.warning(res.message);
        return;
      }
      this.msgSrv.success('提交成功');
      this.modal.close(res.data);
    });
  }

  close() {
    this.modal.destroy();
  }
}
