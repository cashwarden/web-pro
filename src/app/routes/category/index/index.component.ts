import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent } from '@delon/abc/st';
import { CacheService } from '@delon/cache';
import { SFSchema, SFSelectWidgetSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { map } from 'rxjs/operators';
import { params } from 'src/app/shared/params';
import { CategoryFormComponent } from './../form/form.component';

@Component({
  selector: 'app-category-index',
  templateUrl: './index.component.html',
})
export class CategoryIndexComponent implements OnInit {
  @ViewChild('st', { static: false }) st: STComponent;

  loading = true;
  pagination: {};
  list: any[] = [];
  q = {
    page: 1,
    pageSize: 100,
    name: '',
    transaction_type: '',
    ledger_id: 0,
  };
  transactionTypes: any[] = [];

  searchSchema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: '名称',
      },
      transaction_type: {
        type: 'string',
        title: '交易类型',
        default: '',
        ui: {
          widget: 'select',
          asyncData: () => {
            return this.http.get('/api/transactions/types').pipe(
              map((res) => {
                if (res.code !== 0) {
                  this.msg.warning(res.message);
                  return;
                }
                return res.data.map((item: any) => {
                  return { value: item.type, label: item.name };
                });
              }),
            );
          },
        } as SFSelectWidgetSchema,
      },
    },
  };
  columns: STColumn[] = [
    { title: '名称', renderTitle: 'customTitle', render: 'custom' },
    { title: '交易类型', index: 'transaction_type_text' },
    { title: '排序', index: 'sort' },
    { title: '时间', type: 'date', index: 'updated_at' },
    {
      title: '',
      buttons: [
        {
          text: '编辑',
          click: (item: any) => this.form(item),
          iif: (record) => !['adjust', 'transfer'].includes(record.transaction_type),
          iifBehavior: 'disabled',
        },
      ],
    },
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper, private msg: NzMessageService, private cache: CacheService) {}

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.loading = true;
    this.q.ledger_id = this.cache.getNone(params.cacheKey.defaultIdLedger);
    this.http.get('/api/categories', this.q).subscribe((res) => {
      this.list = res.data.items;
      this.pagination = res.data._meta;
      this.loading = false;
    });
  }

  form(record: { id?: number } = {}): void {
    this.modal.create(CategoryFormComponent, { record }, { size: 'md' }).subscribe((res) => {
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
