import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent } from '@delon/abc/st';
import { CacheService } from '@delon/cache';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { params } from 'src/app/shared/params';
import { WishListFormComponent } from '../form/form.component';

@Component({
  selector: 'app-wish-list-index',
  templateUrl: './index.component.html',
})
export class WishListIndexComponent implements OnInit {
  loading = true;
  pagination: {};
  list: any[] = [];
  selectData: any = {};
  q = {
    page: 1,
    pageSize: 100,
    name: '',
    ledger_id: 0,
  };

  url = `/api/wish-lists`;
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
    {
      title: '状态',
      type: 'badge',
      index: 'status',
      badge: {
        todo: { text: '待购', color: 'success' },
        done: { text: '已购', color: 'default' },
        cancelled: { text: '放弃', color: 'default' },
      },
    },
    { title: '名称 ', index: 'name' },
    { title: '金额', render: 'custom' },
    { title: '备注', index: 'remark' },
    { title: '创建时间', type: 'date', index: 'created_at' },
    { title: '更新时间', type: 'date', index: 'updated_at' },
    {
      title: '',
      buttons: [
        { icon: 'edit', type: 'modal', click: (item: any) => this.form(item) },
        {
          icon: 'check-circle',
          click: (record) => this.updateStatus(record, 'done'),
          iif: (record) => record.status === 'todo',
          tooltip: `已购买`,
        },
        {
          icon: 'close-circle',
          click: (record) => this.updateStatus(record, 'cancelled'),
          iif: (record) => record.status === 'todo',
          tooltip: `放弃购买`,
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

  constructor(private http: _HttpClient, private modal: ModalHelper, private message: NzMessageService, private cache: CacheService) {}

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.loading = true;
    this.q.ledger_id = this.cache.getNone(params.cacheKey.defaultIdLedger);
    this.http.get(this.url, this.q).subscribe((res) => {
      this.list = res.data.items;
      this.pagination = res.data._meta;
      this.loading = false;
    });
  }

  form(record: { id?: number } = {}): void {
    this.modal.create(WishListFormComponent, { record, selectData: this.selectData }, { size: 'md' }).subscribe((res) => {
      this.getData();
    });
  }

  delete(record: any): void {
    this.http.delete(`${this.url}/${record.id}`).subscribe((res) => {
      if (res?.code !== 0) {
        this.message.warning(res?.message);
        return;
      }
      // this.getData();
      this.message.success('删除成功');
    });
  }

  updateStatus(record: any, status: string): void {
    this.http.put(`${this.url}/${record.id}/status`, { status }).subscribe((res) => {
      if (res?.code !== 0) {
        this.message.warning(res?.message);
        return;
      }
      this.getData();
      this.message.success('更新成功');
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
