import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CacheService } from '@delon/cache';
import { _HttpClient } from '@delon/theme';
import { toDate } from '@delon/util';
import format from 'date-fns/format';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { params } from 'src/app/shared/params';

@Component({
  selector: 'app-record-form',
  templateUrl: './form.component.html',
})
export class RecordFormComponent implements OnInit {
  record: any = {};
  selectData: any = {};
  selectCacheKey = 'RECORD_SEARCH_SELECT_CACHE_KEY';

  form = {
    type: 'expense',
    from_account_id: '',
    to_account_id: '',
    currency_amount: '',
    currency_code: '',
    category_id: '',
    tags: [],
    description: '',
    remark: '',
    date: new Date(),
    reimbursement_status: 'none',
    exclude_from_stats: false,
    status: 'done',
  };
  ledger: any;

  constructor(
    private http: _HttpClient,
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
    private cdr: ChangeDetectorRef,
    private cache: CacheService,
  ) {
  }

  ngOnInit(): void {
    if (this.record) {
      this.form = Object.assign({}, this.record);
      this.form.date = toDate(this.record.date);
    } else {
      this.ledger = this.cache.getNone(params.cacheKey.defaultLedger);
      this.form.currency_code = this.ledger.base_currency_code;
    }
    this.selectData = this.cache.getNone(this.selectCacheKey);
    this.changeTransactionType(this.form.type);
  }

  save(value: any) {
    const url = this.record?.id ? `/${this.record.id}` : '';
    const method = this.record?.id ? 'put' : 'post';
    value.date = format(new Date(value.date), 'yyyy-MM-dd HH:mm');
    value.ledger_id = this.cache.getNone(params.cacheKey.defaultIdLedger);

    this.http.request(method, `/api/transactions${url}`, { body: value }).subscribe((res: any) => {
      if (res.code !== 0) {
        this.msgSrv.warning(res.message);
        return;
      }
      this.msgSrv.success('保存成功');
      this.modal.close(true);
    });
  }

  changeTransactionType(type: string) {
    const ledger_id = this.cache.getNone(params.cacheKey.defaultIdLedger);
    this.http.get('/api/categories', { transaction_type: type, ledger_id }).subscribe((res: any) => {
      if (res.code !== 0) {
        this.msgSrv.warning(res.message);
        return;
      }
      this.selectData.category_id = res.data.items.map((item: any) => ({
        id: item.id,
        name: item.name,
        icon: item.icon_name,
      }));
      if (!this.record) {
        this.form.category_id = this.selectData.category_id[0].id;
      } else {
        this.form.category_id = this.form.type !== this.record.type ? this.selectData.category_id[0].id : this.record.category_id;
      }
      this.cdr.detectChanges();
    });
  }

  close() {
    this.modal.destroy();
  }
}
