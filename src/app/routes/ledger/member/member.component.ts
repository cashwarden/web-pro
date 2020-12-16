import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent } from '@delon/abc/st';
import { CacheService } from '@delon/cache';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { params } from 'src/app/shared/params';
import { LedgerMemberFormComponent } from './form/form.component';

@Component({
  selector: 'app-ledger-member',
  templateUrl: './member.component.html',
})
export class LedgerMemberComponent implements OnInit {
  @ViewChild('st', { static: false }) st: STComponent;
  url = '/api/ledger/members';
  loading = true;
  pagination: {};
  list: any[] = [];
  q = {
    page: 1,
    pageSize: 100,
    name: '',
    ledger_id: 0,
  };
  href = '';
  ledger: any;

  columns: STColumn[] = [
    { title: '用户名', renderTitle: 'customTitle', render: 'custom' },
    { title: 'Email', index: 'user.email' },
    { title: '权限', index: 'rule_txt' },
    {
      title: '状态',
      type: 'badge',
      index: 'status',
      badge: {
        normal: { text: '正常状态', color: 'success' },
        archived: { text: '已归档', color: 'default' },
        waiting: { text: '等待加入', color: 'warning' },
      },
    },
    { title: '时间', type: 'date', index: 'updated_at' },
    {
      title: '',
      buttons: [
        {
          icon: 'edit',
          click: (item: any) => this.form(item),
          iif: (record) => record.rule !== 'owner',
          iifBehavior: 'disabled',
        },
        {
          icon: 'play-circle',
          click: (record) => this.updateStatus(record, 'normal'),
          iif: (record) => record.status === 'archived',
          tooltip: `启用`,
        },
        {
          icon: 'folder-open',
          click: (record) => this.updateStatus(record, 'archived'),
          iif: (record) => record.rule !== 'owner' && record.status === 'normal',
          tooltip: `归档`,
        },
        {
          icon: 'delete',
          type: 'del',
          pop: {
            title: '确定要移除吗？如果成员被移除，所有涉及的记录、分类将永远失去。',
            okType: 'danger',
          },
          click: (record, _modal, comp) => {
            this.delete(record);
            // tslint:disable-next-line: no-non-null-assertion
            comp!.removeRow(record);
          },
          iif: (record) => record.rule !== 'owner',
          iifBehavior: 'disabled',
        },
      ],
    },
  ];

  constructor(
    private http: _HttpClient,
    private modal: ModalHelper,
    private cdr: ChangeDetectorRef,
    private message: NzMessageService,
    private cache: CacheService,
  ) {}

  ngOnInit() {
    this.ledger = this.cache.getNone(params.cacheKey.defaultLedger);
    this.q.ledger_id = this.ledger.id;

    this.href = `${window.location.origin}/#/ledger/confirm-join?token=${this.ledger.hash_id}`;
    this.getData();
  }

  getData(): void {
    this.loading = true;
    this.http.get(this.url, this.q).subscribe((res) => {
      this.list = res.data.items;
      this.pagination = res.data._meta;
      this.loading = false;
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

  form(record: { id?: number } = {}): void {
    this.modal.create(LedgerMemberFormComponent, { record }, { size: 'md' }).subscribe((res) => {
      if (record.id) {
        // record = res;
        this.getData();
      } else {
        this.list.splice(0, 0, res);
        this.list = [...this.list];
      }
    });
  }

  submit(value: any): void {
    this.q = value;
    this.getData();
  }
}
