import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CacheService } from '@delon/cache';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { params } from 'src/app/shared/params';

@Component({
  selector: 'app-wish-list-form',
  templateUrl: './form.component.html',
})
export class WishListFormComponent implements OnInit {
  record: any = {};
  form = {
    name: '',
    ledger_id: '',
    remark: '',
    currency_amount: '',
    currency_code: 'CNY',
    status: 'todo',
  };

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, public http: _HttpClient, private cache: CacheService) {}

  ngOnInit(): void {
    if (this.record.id) {
      this.form = Object.assign({}, this.record);
    }
  }

  save(value: any) {
    const url = this.record.id ? `/${this.record.id}` : '';
    const method = this.record.id ? 'put' : 'post';
    value.ledger_id = this.cache.getNone(params.cacheKey.defaultIdLedger);
    this.http.request(method, `/api/wish-lists${url}`, { body: value }).subscribe((res: any) => {
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
