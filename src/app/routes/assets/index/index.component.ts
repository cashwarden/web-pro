import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { getTimeDistance } from '@delon/util';
import { NzMessageService } from 'ng-zorro-antd/message';
import { zip } from 'rxjs';
import { AccountFormComponent } from '../../account/form/form.component';

@Component({
  selector: 'app-assets-index',
  templateUrl: './index.component.html',
})
export class AssetsIndexComponent implements OnInit {
  date: any;
  r: any = {
    date: '',
  };
  statistics: any;
  q: any = {
    page: 1,
    pageSize: 50,
    status: '',
    type: 'investment_account',
    expand: 'incomeSum',
    date: '',
  };
  accountSorts = [
    { value: '-balance_cent', label: '余额倒序' },
    { value: 'balance_cent', label: '余额正序' },
  ];
  accountStatus = [
    { value: 'active', label: '正常' },
    { value: 'unactivated', label: '冻结' },
  ];
  accountTypes: any[] = [];
  list: Array<{ id: number; name: string; type: string; color: string; balance: string }> = [];

  loading = true;
  overview: { count: number; init_balance_sum: number; income_sum: number; balance_sum: number };

  constructor(
    private http: _HttpClient,
    private msg: NzMessageService,
    private modal: ModalHelper,
    private cdr: ChangeDetectorRef,
    private datePipe: DatePipe,
  ) {}

  ngOnInit(): void {
    this.getOverview();
    this.getData();
  }

  getData(): void {
    this.loading = true;
    const q = {};
    Object.entries(this.q)
      .filter(([, value]) => value !== null)
      .map(([key, value]) => (q[key] = value));
    this.q = q;
    zip(this.http.get('/api/accounts', this.q), this.http.get('/api/investments/statistics', this.q)).subscribe(
      ([accounts, statistics]: [any, any]) => {
        this.list = accounts.data.items;
        this.statistics = statistics.data;
        console.log(this.statistics);

        this.loading = false;
        this.cdr.detectChanges();
      },
    );

    // this.http.get('/api/accounts', this.q).subscribe((res) => {
    //   this.list = res.data.items;
    //   this.loading = false;
    //   this.cdr.detectChanges();
    // });
  }

  getOverview(): void {
    if (this.date) {
      this.r.date = this.date.map((item: any) => this.datePipe.transform(item, 'yyyy-MM-dd')).join('~');
    }
    this.http.get('/api/investments/overview', this.r).subscribe((res) => {
      if (res?.code !== 0) {
        this.msg.warning(res?.message);
        return;
      }
      this.overview = res.data;
      this.cdr.detectChanges();
    });
  }

  search(): void {
    if (this.date) {
      this.q.date = this.date.map((item: any) => this.datePipe.transform(item, 'yyyy-MM-dd')).join('~');
    }
    this.getData();
    this.getOverview();
  }

  reset(): void {
    this.q = {
      page: 1,
      pageSize: 50,
      status: '',
      type: 'investment_account',
      expand: 'incomeSum',
      date: '',
    };
    this.getData();
  }

  form(record: { id?: number } = {}): void {
    this.modal.create(AccountFormComponent, { record, accountTypes: this.accountTypes }, { size: 'md' }).subscribe((res) => {
      this.getData();
      this.getOverview();
      this.cdr.detectChanges();
    });
  }

  delete(record: any): void {
    this.http.delete(`/api/accounts/${record.id}`).subscribe((res) => {
      if (res?.code !== 0) {
        this.msg.warning(res?.message);
        return;
      }
      this.getData();
      this.getOverview();
      this.msg.success('删除成功');
    });
  }

  setDate(type: 'today' | 'week' | 'month' | 'year'): void {
    this.date = getTimeDistance(type);
    setTimeout(() => this.cdr.detectChanges());
  }
}
