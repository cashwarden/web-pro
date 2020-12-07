import { Component, OnInit } from '@angular/core';
import { CacheService } from '@delon/cache';
import { _HttpClient } from '@delon/theme';
import format from 'date-fns/format';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { params } from '../../../shared/params';

@Component({
  selector: 'app-budget-form',
  templateUrl: './form.component.html',
})
export class BudgetFormComponent implements OnInit {
  record: any = {};
  selectData: any = {};
  dateMode = 'month';
  form = {
    name: '',
    if_keywords: [],
    ledger_id: 0,
    amount: '',
    transaction_type: 'expense',
    period: 'month',
    category_ids: [],
    exclude_tags: '',
    include_tags: '',
    rollover: false,
    init_amount: '',
    started_at: null,
    ended_at: null,
  };
  category_ids = [];

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, public http: _HttpClient, private cache: CacheService) {}

  ngOnInit(): void {
    if (this.record.id) {
      this.form = Object.assign({}, this.record);
      this.dateMode = this.form.period === 'one_time' ? 'date' : this.form.period;
    }
    this.form.ledger_id = this.cache.getNone(params.cacheKey.defaultIdLedger);
    this.changeCategoryIds();
  }

  changeTransactionType() {
    this.form.category_ids = [];
    this.changeCategoryIds();
  }

  changeCategoryIds(): void {
    this.category_ids = this.selectData.category_id.filter((item: any) => item.transaction_type === this.form.transaction_type);
  }

  save(value: any) {
    const url = this.record.id ? `/${this.record.id}` : '';
    value.started_at = format(new Date(value.started_at), 'yyyy-MM-dd');
    value.ended_at = format(new Date(value.ended_at), 'yyyy-MM-dd');

    const method = this.record.id ? 'put' : 'post';
    this.http.request(method, `/api/budget-configs${url}`, { body: value }).subscribe((res: any) => {
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

  changePeriod() {
    this.dateMode = this.form.period === 'one_time' ? 'date' : this.form.period;
  }
}
