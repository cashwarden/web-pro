import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { STColumn, STComponent } from '@delon/abc/st';
import { G2TimelineData } from '@delon/chart/timeline';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';
import getTime from 'date-fns/getTime';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { AccountFormComponent } from '../form/form.component';
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
  accountTypes: any[] = [];
  loading = true;
  accountBalancesTrendLoading = true;
  account: { type: string; status_txt: string; name: string; currency_code: string; currency_balance: number; type_name: string };
  index = 0;
  list: Array<{ id: number; name: string; type: string; color: string; balance: string }> = [];
  accountBalancesTrend: any;
  resetSubjectValue: Subject<boolean> = new Subject<boolean>();

  constructor(
    private http: _HttpClient,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private modal: ModalHelper,
    private msg: NzMessageService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.q.account_id = this.id;
    this.getAccount();
    this.getAccountTypes();
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

  form(record: { id?: number } = {}): void {
    this.modal.create(AccountFormComponent, { record, accountTypes: this.accountTypes }, { size: 'md' }).subscribe((res) => {
      this.getAccount();
      if (this.index === 1) {
        this.resetSubjectValue.next(this.q);
      }
      if (this.index === 0) {
        this.getAccountBalancesTrend();
      }
      this.cdr.detectChanges();
    });
  }

  delete(record: any): void {
    this.http.delete(`/api/accounts/${record.id}`).subscribe((res) => {
      if (res?.code !== 0) {
        this.msg.warning(res?.message);
        return;
      }
      this.msg.success('删除成功');
      this.router.navigateByUrl('/account/index');
    });
  }

  getAccountTypes(): void {
    this.http.get('/api/accounts/types').subscribe((res) => {
      if (res.data) {
        this.accountTypes = res.data;
        this.cdr.detectChanges();
      }
    });
  }

  getAccountBalancesTrend(): void {
    this.accountBalancesTrendLoading = true;
    this.http.get(`${this.url}/${this.id}/balances/trend`).subscribe((res) => {
      this.accountBalancesTrendLoading = false;
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
