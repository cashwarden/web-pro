import { Component, OnInit, ViewChild } from '@angular/core';
import { CacheService } from '@delon/cache';
import { SFComponent, SFSchema, SFUISchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { params } from 'src/app/shared/params';

@Component({
  selector: 'app-tag-form',
  templateUrl: './form.component.html',
})
export class TagFormComponent implements OnInit {
  @ViewChild('sf', { static: false }) private sf: SFComponent;
  record: any = {};
  ledger_id = 0;
  schema: SFSchema = {
    properties: {
      name: { type: 'string', title: '名称' },
    },
    required: ['name'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 24 },
    },
  };

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, public http: _HttpClient, private cache: CacheService) {}

  ngOnInit(): void {
    this.ledger_id = this.cache.getNone(params.cacheKey.defaultIdLedger);
  }

  save(value: any) {
    const url = this.record.id ? `/${this.record.id}` : '';
    const method = this.record.id ? 'put' : 'post';
    value.ledger_id = this.ledger_id;
    this.http.request(method, `/api/tags${url}`, { body: value }).subscribe((res: any) => {
      if (res.code !== 0) {
        this.msgSrv.warning(res.message);
        return;
      }
      this.msgSrv.success('保存成功');
      this.modal.close(res.data);
    });
  }

  close() {
    this.modal.destroy();
  }
}
