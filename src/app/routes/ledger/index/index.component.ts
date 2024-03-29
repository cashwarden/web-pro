import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LedgerFormComponent } from './../form/form.component';

@Component({
  selector: 'app-ledger-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LedgerIndexComponent implements OnInit {
  q: any = {
    page: 1,
    pageSize: 50,
    expand: 'user',
    name: '',
  };
  list: any[] = [];
  codes: [{ code: string, name: string }];

  loading = true;
  overview: { count: number; net_asset: number; total_assets: number; liabilities: number };

  searchSchema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: '名称',
      },
    },
  };

  constructor(
    private http: _HttpClient,
    private msg: NzMessageService,
    private modal: ModalHelper,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    this.getData();
    this.loadCodes();
  }

  getData(): void {
    this.loading = true;
    const q = {};
    Object.entries(this.q)
      .filter(([, value]) => value !== null)
      .map(([key, value]) => (q[key] = value));
    this.q = q;
    this.http.get('/api/ledgers', this.q).subscribe((res) => {
      this.list = res.data.items;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  form(record: { id?: number } = {}): void {
    this.modal.create(
      LedgerFormComponent,
      { record, codes: this.codes },
      { size: 'md' },
    ).subscribe((res) => {
      this.getData();
      this.cdr.detectChanges();
    });
  }

  loadCodes(): void {
    this.http.get('/api/currencies/codes').subscribe((res: any) => {
      if (res.code !== 0) {
        this.msg.warning(res.message);
        return;
      }
      this.codes = res.data;
      this.cdr.detectChanges();
    });
  }

  submit(value: any): void {
    this.q.name = value.name;
    this.getData();
  }

  reset(): void {
    this.q.name = '';
    this.getData();
  }

  delete(record: any): void {
    this.http.delete(`/api/ledgers/${record.id}`).subscribe((res) => {
      if (res?.code !== 0) {
        this.msg.warning(res?.message);
        return;
      }
      this.getData();
      this.msg.success('删除成功');
    });
  }
}
