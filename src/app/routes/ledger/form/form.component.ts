import { Component, OnInit } from '@angular/core';
import { CacheService } from '@delon/cache';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { params } from 'src/app/shared/params';

@Component({
  selector: 'app-ledger-form',
  templateUrl: './form.component.html',
})
export class LedgerFormComponent implements OnInit {
  record: any = {};
  types: [];
  ledger_id = 0;

  form = {
    cover: '',
    name: '',
    type: 'general_ledger',
    default: false,
    remark: '',
    base_currency_code: '',
  };
  codes: [{ code: string, name: string }];

  constructor(private http: _HttpClient, private modal: NzModalRef, private msgSrv: NzMessageService, private cache: CacheService) {
  }

  ngOnInit(): void {
    this.ledger_id = this.cache.getNone(params.cacheKey.defaultIdLedger);
    if (this.record.id) {
      this.form = this.record;
    }
  }

  save(value: any) {
    const url = this.record.id ? `/${this.record.id}` : '';
    const method = this.record.id ? 'put' : 'post';
    this.http.request(method, `/api/ledgers${url}`, { body: value }).subscribe((res: any) => {
      if (res.code !== 0) {
        this.msgSrv.warning(res.message);
        return;
      }
      if (this.ledger_id === res.data.id) {
        this.cache.set(params.cacheKey.defaultLedger, res.data);
      }
      this.msgSrv.success('保存成功');
      this.modal.close(res.data);
    });
  }

  close() {
    this.modal.destroy();
  }
}
