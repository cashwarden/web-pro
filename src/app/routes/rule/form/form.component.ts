import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-rule-form',
  templateUrl: './form.component.html',
})
export class RuleFormComponent implements OnInit {
  record: any = {};
  selectData: any = {};
  form = {
    name: '',
    if_keywords: [],
    ledger_id: '',
    then_transaction_type: 'expense',
    then_from_account_id: '',
    then_to_account_id: '',
    then_category_id: '',
    then_tags: [],
    then_currency_amount: '',
    then_currency_code: 'CNY',
    sort: 99,
  };

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, public http: _HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (this.record.id) {
      this.form = Object.assign({}, this.record);
    }
    this.selectData.category_id = [];
  }

  changeTransactionType() {
    this.form.then_category_id = '';
    const ledger = this.selectData.ledgersCategories.filter((item: any) => item.id === this.form.ledger_id)[0];
    if (ledger) {
      this.selectData.category_id = ledger.categories[this.form.then_transaction_type];
    }
  }

  save(value: any) {
    const url = this.record.id ? `/${this.record.id}` : '';
    const method = this.record.id ? 'put' : 'post';
    this.http.request(method, `/api/rules${url}`, { body: value }).subscribe((res: any) => {
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
