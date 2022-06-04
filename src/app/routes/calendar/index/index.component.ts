import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CacheService } from '@delon/cache';
import { _HttpClient } from '@delon/theme';
import { NzCalendarMode } from 'ng-zorro-antd/calendar';
import { params } from 'src/app/shared/params';

@Component({
  selector: 'app-calendar-index',
  styleUrls: ['./index.component.less'],
  templateUrl: './index.component.html',
})
export class CalendarIndexComponent implements OnInit {
  q: any = {};
  rq: any = {};
  data: any = {};
  records: any[] = [];
  loading = true;

  date: Date[] = [];
  mode: NzCalendarMode = 'month';

  constructor(
    private http: _HttpClient,
    private cdr: ChangeDetectorRef,
    private datePipe: DatePipe,
    private cache: CacheService,
  ) {
  }

  ngOnInit() {
    const now = new Date();
    this.q.ledger_id = this.cache.getNone(params.cacheKey.defaultIdLedger);
    this.rq.ledger_id = this.cache.getNone(params.cacheKey.defaultIdLedger);
    this.selectChange(now);
  }

  getData(): void {
    this.http.get('/api/analysis/calendar', this.q).subscribe((res) => {
      this.data = res.data;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }


  getRecord(): void {
    this.http.get('/api/records', this.rq).subscribe((res) => {
      this.records = res.data.items;

      this.cdr.detectChanges();
    });
  }

  getDateData(date: Date): number | null {
    const current = this.datePipe.transform(date, 'yyyy-MM-dd');
    if (this.data[current]) {
      return this.data[current];
    }

    return null;
  }

  getMonthData(date: Date): number | null {
    return null;
  }

  panelChange(change: { date: Date; mode: string }): void {
    console.log(`Current value: ${change.date}`);
    console.log(`Current mode: ${change.mode}`);
  }

  getDateForSelect(select: Date, days: number): string {
    const startDate = new Date(select.getTime() - days * 24 * 60 * 60 * 1000);
    const endDate = new Date(select.getTime() + days * 24 * 60 * 60 * 1000);
    const start = this.datePipe.transform(startDate, 'yyyy-MM-dd');
    const end = this.datePipe.transform(endDate, 'yyyy-MM-dd');
    return start + '~' + end;
  }

  selectChange(select: Date): void {
    this.rq.date = this.getDateForSelect(select, 0);
    this.q.date = this.getDateForSelect(select, 41);
    this.getRecord();
    this.getData();

  }
}

