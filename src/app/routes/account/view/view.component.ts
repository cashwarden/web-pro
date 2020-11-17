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
  q: any = {
    page: 1,
    pageSize: 50,
    expand: 'ledger',
  };
  id: string;
  loading = true;
  account: { type: string; status: string; name: string; currency_code: string; currency_balance: number; type_name: string };
  index = 0;
  list: Array<{ id: number; name: string; type: string; color: string; balance: string }> = [];
  accountBalancesTrend: any;

  constructor(private http: _HttpClient, private route: ActivatedRoute, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.q.account_id = this.id;
    this.getAccount();
    this.getAccountBalancesTrend();
  }

  getAccount(): void {
    this.loading = true;
    this.http.get(`${this.url}/${this.id}`).subscribe((res) => {
      this.account = res.data;
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
