import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { XlsxService } from '@delon/abc/xlsx';
import { CacheService } from '@delon/cache';
import { ModalHelper, _HttpClient } from '@delon/theme';
import format from 'date-fns/format';
import { Subject } from 'rxjs';
import { params } from 'src/app/shared/params';
import { RecordFormComponent } from '../form/form.component';
import { RecordImportComponent } from '../import/import.component';

@Component({
  selector: 'app-record-index',
  styleUrls: ['./index.component.less'],
  templateUrl: './index.component.html',
})
export class RecordIndexComponent implements OnInit {
  resetSubjectValue: Subject<boolean> = new Subject<boolean>();
  q: any = {
    page: 1,
    pageSize: 50,
  };
  list: Array<{ date: string; records: []; in: string; out: string }> = [];
  loading = true;

  overview: [];
  pagination: { totalCount: number; pageCount: number; currentPage: number; perPage: number };

  constructor(
    private http: _HttpClient,
    private modal: ModalHelper,
    private cdr: ChangeDetectorRef,
    private xlsx: XlsxService,
    private cache: CacheService,
  ) { }

  ngOnInit(): void {
    this.q.ledger_id = this.cache.getNone(params.cacheKey.defaultIdLedger);
  }

  import(): void {
    this.modal.create(RecordImportComponent, {}, { size: 'lg' }).subscribe(() => {
      this.q.page = 1;
      this.resetSubjectValue.next(this.q);
      this.cdr.detectChanges();
    });
  }

  form(record: { id?: number; transaction?: {} } = {}): void {
    this.modal.create(RecordFormComponent, { record: record.transaction }, { size: 'md' }).subscribe(() => {
      this.q.page = 1;
      this.resetSubjectValue.next(this.q);
      this.cdr.detectChanges();
    });
  }

  download(): void {
    const initData = [['账单日期', '类别', '类型', '金额', '标签', '描述', '备注', '账户 1', '账户 2']];
    this.http.get('/api/transactions/export', { ledger_id: this.q.ledger_id, }).subscribe((res: any) => {
      const data = initData.concat(res.data);
      const now = format(new Date(), 'yyyy-MM-dd');
      this.xlsx.export({
        sheets: [
          {
            data,
            name: 'sheet name',
          },
        ],
        opts: {
          bookType: 'csv',
        },
        filename: `CashWarden_Export_${now}.csv`,
      });
    });
  }

  reloadData(value) {
    if (value) {
      this.q.page = 1;
      this.q.ledger_id = this.cache.getNone(params.cacheKey.defaultIdLedger);
      this.q = value;
      this.resetSubjectValue.next(this.q);
    }
  }
}
