import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent } from '@delon/abc/st';
import { CacheService } from '@delon/cache';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { params } from '../../../shared/params';
import { BudgetFormComponent } from '../form/form.component';

@Component({
  selector: 'app-budget-index',
  templateUrl: './index.component.html',
})
export class BudgetIndexComponent implements OnInit {
  loading = true;
  pagination: {};
  list: any[] = [];
  selectData: any = {};
  ledger_id = 0;
  q = {
    page: 1,
    pageSize: 100,
    name: '',
    transaction_type: '',
  };

  url = '/api/budget-configs';
  searchSchema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: '名称',
      },
    },
  };

  constructor(private http: _HttpClient, private modal: ModalHelper, private message: NzMessageService, private cache: CacheService) {}

  ngOnInit() {
    this.ledger_id = this.cache.getNone(params.cacheKey.defaultIdLedger);
    this.getData();
    this.loadSelect('/api/categories', 'category_id');
    this.loadSelect('/api/tags', 'tags');
  }

  getData(): void {
    this.loading = true;
    this.http.get(this.url, this.q).subscribe((res) => {
      this.list = res.data.items;
      this.pagination = res.data._meta;
      this.loading = false;
    });
  }

  form(record: { id?: number } = {}): void {
    this.modal.create(BudgetFormComponent, { record, selectData: this.selectData }, { size: 'md' }).subscribe((res) => {
      this.getData();
    });
  }

  copy(record: any): void {
    this.http.post(`${this.url}/${record.id}/copy`).subscribe((res) => {
      if (res?.code !== 0) {
        this.message.warning(res?.message);
        return;
      }
      this.list.splice(0, 0, res.data);
      this.list = [...this.list];
      this.message.success('复制成功');
    });
  }

  delete(record: any): void {
    this.http.delete(`${this.url}/${record.id}`).subscribe((res) => {
      if (res?.code !== 0) {
        this.message.warning(res?.message);
        return;
      }
      this.getData();
      this.message.success('删除成功');
    });
  }

  loadSelect(url: string, key: string) {
    this.http.get(url, { pageSize: 100, ledger_id: this.ledger_id }).subscribe((res: any) => {
      if (res.data) {
        if (key === 'tags') {
          this.selectData[key] = res.data.items.map((item: any) => ({ value: item.name, label: item.name }));
        } else if (['account_id'].includes(key)) {
          this.selectData[key] = res.data.items.map((item: any) => ({
            id: item.id,
            name: item.name,
            icon: item.icon_name,
          }));
        } else if (key === 'transaction_type') {
          this.selectData[key] = res.data.map((item: any) => ({ value: item.type, label: item.name }));
        } else {
          this.selectData[key] = res.data.items;
        }
      }
    });
  }

  submit(value: any): void {
    if (value.name) {
      this.q.name = value.name;
      this.getData();
    }
  }

  reset(): void {
    this.q.name = '';
    this.getData();
  }
}
