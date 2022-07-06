import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AccountFormComponent } from './../form/form.component';

@Component({
  selector: 'app-account-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountIndexComponent implements OnInit {
  q: any = {
    page: 1,
    pageSize: 100,
    status: 'active',
    expand: 'user',
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
  overview: { count: number; net_asset: number; total_assets: number; liabilities: number };

  constructor(private http: _HttpClient, private msg: NzMessageService, private modal: ModalHelper, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getOverview();
    this.getData();
    this.getAccountTypes();
  }

  getData(): void {
    this.loading = true;
    const q = {};
    Object.entries(this.q)
      .filter(([, value]) => value !== null)
      .map(([key, value]) => (q[key] = value));
    this.q = q;
    this.http.get('/api/accounts', this.q).subscribe((res) => {
      this.list = res.data.items;
      this.loading = false;
      this.cdr.detectChanges();
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

  getOverview(): void {
    this.http.get('/api/accounts/overview').subscribe((res) => {
      this.overview = res.data;
      this.cdr.detectChanges();
    });
  }

  search(): void {
    this.getData();
  }

  reset(): void {
    this.q = {
      page: 1,
      pageSize: 50,
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
}
