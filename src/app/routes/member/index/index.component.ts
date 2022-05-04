import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent } from '@delon/abc/st';
import { CacheService } from '@delon/cache';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { params } from 'src/app/shared/params';
import { MemberFormComponent } from '../form/form.component';


@Component({
  selector: 'app-member-index',
  templateUrl: './index.component.html',
})
export class MemberIndexComponent implements OnInit {
  @ViewChild('st', { static: false }) st: STComponent;
  url = '/api/members';
  loading = true;
  pagination: {};
  list: any[] = [];
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

  columns: STColumn[] = [
    { title: '用户名', renderTitle: 'customTitle', render: 'custom' },
    { title: 'Email', index: 'email' },
    { title: '角色', index: 'role' },
    {
      title: '状态',
      type: 'badge',
      index: 'status',
      badge: {
        active: { text: '激活', color: 'success' },
        unactivated: { text: '未激活', color: 'default' },
      },
    },
    { title: '加入时间', type: 'date', index: 'created_at' },
    {
      title: '',
      buttons: [
        {
          icon: 'edit',
          click: (item: any) => this.form(item),
          iif: (record) => record.role !== 'owner',
          iifBehavior: 'disabled',
        },
        {
          icon: 'usergroup-delete',
          click: (record) => this.updateRole(record, 'disabled'),
          iif: (record) => record.role !== 'owner' && record.role !== 'disabled',
          tooltip: `冻结用户`,
        },
        // {
        //   icon: 'delete',
        //   type: 'del',
        //   pop: {
        //     title: '确定要移除吗？如果成员被移除，所有涉及的记录、分类将永远失去。',
        //     okType: 'danger',
        //   },
        //   click: (record, _modal, comp) => {
        //     this.delete(record);
        //     // tslint:disable-next-line: no-non-null-assertion
        //     comp!.removeRow(record);
        //   },
        //   iif: (record) => record.role !== 'owner',
        //   iifBehavior: 'disabled',
        // },
      ],
    },
  ];

  constructor(
    private http: _HttpClient,
    private modal: ModalHelper,
    private cdr: ChangeDetectorRef,
    private message: NzMessageService,
    private cache: CacheService,
  ) { }

  ngOnInit() {

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

  updateRole(record: any, role: string): void {
    this.http.put(`${this.url}/${record.id}`, { role }).subscribe((res) => {
      if (res?.code !== 0) {
        this.message.warning(res?.message);
        return;
      }
      this.getData();
      this.message.success('更新成功');
    });
  }

  form(record: { id?: number } = {}): void {
    this.modal.create(MemberFormComponent, { record }, { size: 'md' }).subscribe((res) => {
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

  reset(): void {
    this.q.name = '';
    this.getData();
  }

}
