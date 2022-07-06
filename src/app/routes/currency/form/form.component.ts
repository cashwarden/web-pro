import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CacheService } from '@delon/cache';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { params } from 'src/app/shared/params';

@Component({
  selector: 'app-currency-form',
  templateUrl: './form.component.html',
})
export class CurrencyFormComponent implements OnInit {
  record: any = {};
  ledger_id = 0;
  form = {
    ledger_id: 0,
    currency_code_from: '',
    currency_code_to: '',
    rate: 0,
  };
  codes: [{ code: string, name: string }];
  base_currency_code: string;
  loading = false;

  constructor(
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
    public http: _HttpClient,
    private cdr: ChangeDetectorRef,
    private cache: CacheService,
  ) {
  }

  ngOnInit(): void {
    if (this.record.id) {
      this.form = this.record;
    }
    this.ledger_id = this.cache.getNone(params.cacheKey.defaultIdLedger);
    this.form.currency_code_to = this.base_currency_code;
  }

  save(value: any) {
    const url = this.record.id ? `/${this.record.id}` : '';
    const method = this.record.id ? 'put' : 'post';
    value.ledger_id = this.ledger_id;
    this.http.request(method, `/api/currencies${url}`, { body: value }).subscribe((res: any) => {
      if (res.code !== 0) {
        this.msgSrv.warning(res.message);
        return;
      }
      this.msgSrv.success('保存成功');
      this.modal.close(res.data);
    });
  }

  changeCurrency(code: string) {
    this.loading = true;
    this.http.get(`/api/currencies/rate/${code}/${this.form.currency_code_to}`).subscribe((res: any) => {
      if (res.code !== 0) {
        this.msgSrv.warning(res.message);
        return;
      }
      this.form.rate = res.data.rate;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  close() {
    this.modal.destroy();
  }
}
