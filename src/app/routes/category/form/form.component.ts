import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CacheService } from '@delon/cache';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { params } from 'src/app/shared/params';

@Component({
  selector: 'app-category-form',
  templateUrl: './form.component.html',
})
export class CategoryFormComponent implements OnInit {
  record: any = {};
  ledger_id = 0;
  form = {
    name: '',
    transaction_type: 'expense',
    sort: 99,
    icon_name: '',
  };
  icons: [];

  constructor(
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
    public http: _HttpClient,
    private cdr: ChangeDetectorRef,
    private cache: CacheService,
  ) {}

  ngOnInit(): void {
    this.loadIcons();
    if (this.record.id) {
      this.form = this.record;
    }
    this.ledger_id = this.cache.getNone(params.cacheKey.defaultIdLedger);
  }

  save(value: any) {
    const url = this.record.id ? `/${this.record.id}` : '';
    const method = this.record.id ? 'put' : 'post';
    value.ledger_id = this.ledger_id;
    this.http.request(method, `/api/categories${url}`, { body: value }).subscribe((res: any) => {
      if (res.code !== 0) {
        this.msgSrv.warning(res.message);
        return;
      }
      this.msgSrv.success('保存成功');
      this.modal.close(res.data);
    });
  }

  loadIcons(): void {
    this.http.get('/api/icons').subscribe((res: any) => {
      if (res.code !== 0) {
        this.msgSrv.warning(res.message);
        return;
      }
      this.icons = res.data;
      this.cdr.detectChanges();
    });
  }

  close() {
    this.modal.destroy();
  }
}
