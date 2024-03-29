import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { RecordFormComponent } from 'src/app/routes/record/form/form.component';
import { RecurrenceFormComponent } from 'src/app/routes/recurrence/form/form.component';

@Component({
  selector: 'app-record-grid',
  templateUrl: './grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecordGridComponent implements OnInit {
  list: Array<{ date: string; records: []; in: string; out: string }> = [];
  pagination: { totalCount: number; pageCount: number; currentPage: number; perPage: number };
  loading = true;
  loadingMore = false;
  statusLoading = false;
  @Input() q: any = {};
  @Input() showLedger = false;
  @Input() resetSubject: Subject<boolean> = new Subject<boolean>();

  constructor(
    private http: _HttpClient,
    private cdr: ChangeDetectorRef,
    private modal: ModalHelper,
    private router: Router,
    private msg: NzMessageService,
  ) {
  }

  ngOnInit() {
    this.resetSubject.subscribe((response) => {
      this.q = response;
      this.getData();
    });

    this.getData();
  }

  getData(): void {
    this.loading = true;
    const q = {};
    Object.entries(this.q)
      .filter(([, value]) => value !== null)
      .map(([key, value]) => (q[key] = value));
    this.q = q;

    this.http.get('/api/records', this.q).subscribe((res) => {
      this.list = res.data.items;
      this.pagination = res.data._meta;
      this.loadingMore = res.data._meta.pageCount > res.data._meta.currentPage;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  form(record: { id?: number; transaction?: {} } = {}): void {
    this.modal.create(RecordFormComponent, { record: record.transaction }, { size: 'md' }).subscribe((res) => {
      this.q.page = 1;
      this.getData();
      this.cdr.detectChanges();
    });
  }

  recurrenceForm(record: { transaction_id?: number } = {}): void {
    this.modal.create(RecurrenceFormComponent, { record: { transaction_id: record.transaction_id } }, { size: 'md' }).subscribe((res) => {
      this.router.navigateByUrl(`/recurrence/index`);
    });
  }

  delete(record: any): void {
    this.http.delete(`/api/records/${record.id}`).subscribe((res) => {
      if (res?.code !== 0) {
        this.msg.warning(res?.message);
        return;
      }
      this.q.page = 1;
      this.getData();
      this.msg.success('删除成功');
    });
  }

  updateStatus(record: any, name: string): void {
    this.statusLoading = true;
    let status = '';
    switch (name) {
      case 'reimbursement_status':
        status = record.reimbursement_status === 'done' ? 'todo' : 'done';
        break;
      case 'review':
        status = record.review === 'reviewed' ? 'no_review' : 'reviewed';
        break;
    }
    this.http.put(`/api/records/status/${record.id}/${name}`, { status: status }).subscribe((res) => {
      if (res?.code !== 0) {
        this.msg.warning(res?.message);
        return;
      }
      this.statusLoading = false;
      record[name] = status;
      record.transaction[name] = status;
      this.msg.success('状态更新成功');
      this.cdr.detectChanges();
    });
  }

  onLoadMore(): void {
    this.loadingMore = true;
    this.q.page++;
    this.http.get('/api/records', this.q).subscribe((res: any) => {
      const data = this.list.concat(res.data.items);
      this.list = [...data];
      if (res.data._meta.pageCount <= res.data._meta.currentPage) {
        this.loadingMore = false;
      }
      this.cdr.detectChanges();
    });
  }
}
