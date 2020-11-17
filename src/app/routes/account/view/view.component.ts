import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { STColumn, STComponent } from '@delon/abc/st';
import { G2TimelineData } from '@delon/chart/timeline';
import { SFSchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import getTime from 'date-fns/getTime';

@Component({
  selector: 'app-account-view',
  templateUrl: './view.component.html',
})
export class AccountViewComponent implements OnInit {
  url = `/api/accounts`;
  id: string;
  loading = true;
  account: { type: string; status: string; name: string; currency_code: string; currency_balance: number; type_name: string };
  index = 0;
  list: Array<{ id: number; name: string; type: string; color: string; balance: string }> = [];
  accountBalancesTrend: any;

  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '编号',
      },
    },
  };
  @ViewChild('st', { static: false }) st: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'no' },
    { title: '调用次数', type: 'number', index: 'callNo' },
    { title: '头像', type: 'img', width: '50px', index: 'avatar' },
    { title: '时间', type: 'date', index: 'updatedAt' },
    {
      title: '',
      buttons: [
        // { text: '查看', click: (item: any) => `/form/${item.id}` },
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ],
    },
  ];

  constructor(private http: _HttpClient, private route: ActivatedRoute, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getAccount();
    this.getAccountBalancesTrend();
    this.getData();
  }

  getAccount(): void {
    this.loading = true;
    this.http.get(`${this.url}/${this.id}`).subscribe((res) => {
      this.account = res.data;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  getData(): void {
    this.loading = true;
    this.http.get('/api/record', { account_id: this.id }).subscribe((res) => {
      this.list = res.data.items;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  getAccountBalancesTrend(): void {
    this.http.get(`${this.url}/${this.id}/balances/trend`).subscribe((res) => {
      this.accountBalancesTrend = {
        data: res.data,
        xField: 'date',
        yField: 'after_balance',
        meta: {
          date: {
            alias: '日期',
          },
          after_balance: {
            alias: '余额',
          },
        },
        interactions: [
          {
            type: 'slider',
            cfg: {
              start: 0,
              end: 1,
            },
          },
        ],
      };
      this.cdr.detectChanges();
    });
  }
}
