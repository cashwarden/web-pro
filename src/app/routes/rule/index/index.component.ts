import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { RuleFormComponent } from '../form/form.component';

@Component({
  selector: 'app-rule-index',
  templateUrl: './index.component.html',
})
export class RuleIndexComponent implements OnInit {
  loading = true;
  pagination: {};
  list: any[] = [];
  selectData: any = {};
  q = {
    page: 1,
    pageSize: 100,
    name: '',
  };

  // url = `/api/records`;
  searchSchema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: '名称',
      },
    },
  };

  @ViewChild('st', { static: false }) st: STComponent;
  columns: STColumn[] = [
    { title: '名称 ', index: 'name' },
    { title: '关键词', index: 'if_keywords' },
    { title: '账本', index: 'ledger.name' },
    { title: '分配交易类型', index: 'then_transaction_type_text' },
    { title: '分配类别', index: 'thenCategory.name' },
    { title: '排序', index: 'sort' },
    {
      title: '状态',
      type: 'badge',
      index: 'status',
      badge: {
        active: { text: '启用', color: 'success' },
        unactivated: { text: '停用', color: 'default' },
      },
    },
    { title: '时间', type: 'date', index: 'updated_at' },
    {
      title: '',
      buttons: [
        { icon: 'edit', type: 'modal', click: (item: any) => this.form(item) },
        { icon: 'copy', type: 'modal', click: (item: any) => this.copy(item) },
        {
          icon: 'play-circle',
          click: (record) => this.updateStatus(record, 'active'),
          iif: (record) => record.status === 'unactivated',
          tooltip: `启用`,
        },
        {
          icon: 'pause-circle',
          click: (record) => this.updateStatus(record, 'unactivated'),
          iif: (record) => record.status === 'active',
          tooltip: `停用`,
        },
        {
          icon: 'delete',
          type: 'del',
          pop: {
            title: '确定要删除吗？',
            okType: 'danger',
          },
          click: (record, _modal, comp) => {
            this.delete(record);
            // tslint:disable-next-line: no-non-null-assertion
            comp!.removeRow(record);
          },
        },
      ],
    },
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper, private message: NzMessageService) { }

  ngOnInit() {
    this.getData();
    this.loadSelect('/api/accounts', 'account_id');
    this.getLedgersCategories();
    this.loadSelect('/api/tags', 'tags');
  }

  getData(): void {
    this.loading = true;
    this.http.get('/api/rules', this.q).subscribe((res) => {
      this.list = res.data.items;
      this.pagination = res.data._meta;
      this.loading = false;
    });
  }

  form(record: { id?: number } = {}): void {
    this.modal.create(RuleFormComponent, { record, selectData: this.selectData }, { size: 'md' }).subscribe((res) => {
      this.getData();
    });
  }

  copy(record: any): void {
    this.http.post(`/api/rules/${record.id}/copy`).subscribe((res) => {
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
    this.http.delete(`/api/rules/${record.id}`).subscribe((res) => {
      if (res?.code !== 0) {
        this.message.warning(res?.message);
        return;
      }
      // this.getData();
      this.message.success('删除成功');
    });
  }

  updateStatus(record: any, status: string): void {
    this.http.put(`/api/rules/${record.id}/status`, { status }).subscribe((res) => {
      if (res?.code !== 0) {
        this.message.warning(res?.message);
        return;
      }
      this.getData();
      this.message.success('更新成功');
    });
  }

  loadSelect(url: string, key: string) {
    this.http.get(url, { pageSize: 100 }).subscribe((res: any) => {
      if (res.data) {
        if (key === 'tags') {
          this.selectData[key] = res.data.items.map((item: any) => ({ value: item.name, label: item.name }));
        } else if (['account_id', 'category_id'].includes(key)) {
          this.selectData[key] = res.data.items.map((item: any) => ({ id: item.id, name: item.name, icon: item.icon_name }));
        } else if (key === 'transaction_type') {
          this.selectData[key] = res.data.map((item: any) => ({ value: item.type, label: item.name }));
        }
      }
    });
  }

  getLedgersCategories(): void {
    this.http.get('/api/ledgers/categories').subscribe((res: any) => {
      this.selectData.ledgersCategories = res.data;
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
