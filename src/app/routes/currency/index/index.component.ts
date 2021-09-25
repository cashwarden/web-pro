import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent } from '@delon/abc/st';
import { CacheService } from '@delon/cache';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { params } from 'src/app/shared/params';
import { CurrencyFormComponent } from '../form/form.component';


@Component({
  selector: 'app-currency-index',
  templateUrl: './index.component.html',
})
export class CurrencyIndexComponent implements OnInit {
  @ViewChild('st', { static: false }) st: STComponent;

  loading = true;
  pagination: {};
  list: any[] = [];
  ledger: any;
  q = {
    page: 1,
    pageSize: 100,
    name: '',
    ledger_id: 0,
  };

  columns: STColumn[] = [
    { title: '货币', index: 'currency_code_from' },
    { title: '汇率', index: 'rate' },
    { title: '描述', render: 'custom' },
    { title: '时间', type: 'date', index: 'updated_at' },
    {
      title: '',
      buttons: [
        {
          icon: 'edit',
          click: (item: any) => this.form(item),
        },
        {
          icon: 'delete',
          type: 'del',
          pop: {
            title: '确定要删除吗？',
            okType: 'danger',
          },
          click: (record, _modal, comp) => {
            this.delete(record, comp);
          },
        },
      ],
    },
  ];
  codes: [{ code: string, name: string }];
  base_currency_code: string;

  constructor(
    private http: _HttpClient,
    private modal: ModalHelper,
    private cache: CacheService,
    private msg: NzMessageService,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    this.getData();
    this.loadCodes();
    this.ledger = this.cache.getNone(params.cacheKey.defaultLedger);
    this.base_currency_code = this.ledger.base_currency_code;
  }

  getData(): void {
    this.loading = true;
    this.q.ledger_id = this.cache.getNone(params.cacheKey.defaultIdLedger);
    this.http.get('/api/currencies', this.q).subscribe((res) => {
      this.list = res.data.items;
      this.pagination = res.data._meta;
      this.loading = false;
    });
  }

  form(record: { id?: number } = {}): void {
    this.modal.create(
      CurrencyFormComponent,
      { record: record, codes: this.codes, base_currency_code: this.base_currency_code },
      { size: 'md' },
    ).subscribe((res) => {
      if (record.id) {
        this.getData();
      } else {
        this.list.splice(0, 0, res);
        this.list = [...this.list];
      }
    });
  }

  delete(record: any, comp): void {
    this.http.delete(`/api/currencies/${record.id}`).subscribe((res) => {
      if (res?.code !== 0) {
        this.msg.warning(res?.message);
        return;
      }
      // tslint:disable-next-line: no-non-null-assertion
      comp!.removeRow(record);
      // this.getData();
      this.msg.success('删除成功');
    });
  }

  loadCodes(): void {
    this.http.get('/api/currencies/codes').subscribe((res: any) => {
      if (res.code !== 0) {
        this.msg.warning(res.message);
        return;
      }
      this.codes = res.data.filter((item: { code: string, name: string }) => item.code !== this.base_currency_code);
      this.cdr.detectChanges();
    });
  }

  submit(value: any): void {
    if (value.name) {
      this.q.name = value.name;
      this.getData();
    }
  }
}
