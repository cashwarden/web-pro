import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Datum } from '@antv/g2plot/lib/dependents';
import { CacheService } from '@delon/cache';
import { G2PieClickItem, G2PieData } from '@delon/chart/pie';
import { G2TagCloudData } from '@delon/chart/tag-cloud';
import { _HttpClient } from '@delon/theme';
import { yuan } from '@shared';
import { params } from 'src/app/shared/params';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  accounts: Array<{ name: string; balance: number; type_name: string; type: string }> = [];
  lastRecords: Array<{ date: string; out: string; in: string; records: [] }> = [];
  loading = true;
  data: any = {};
  tags: G2TagCloudData[];
  ledger_id = 0;

  categoriesData: any;
  categoriesTotal = 0;

  recordsAnalysisData: any;
  categoriesOptions: any;
  recordsAnalysisLoading = true;

  recordsOverview: Array<{ overview: { surplus: number; expense: number; income: number }; key: string; text: string }>;
  water: { overview: { surplus: number; expense: number; income: number }; key: string; text: string; percent?: string };
  accountsOverview: { percent: number; color: string };
  constructor(private http: _HttpClient, private cdr: ChangeDetectorRef, private cache: CacheService) {}

  ngOnInit() {
    this.ledger_id = this.cache.getNone(params.cacheKey.defaultIdLedger);
    // this.getAccounts();
    this.getOverview();
    this.getTags();
    this.getLastRecords();
    this.getCategoryiesData();
    this.getRecordAnalysisData();
  }

  // getAccounts(): void {
  //   this.http.get('/api/accounts', { pageSize: 3, sort: '-balance_cent' }).subscribe((res) => {
  //     this.accounts = res.data.items;
  //     this.loading = false;
  //     this.cdr.detectChanges();
  //   });
  // }

  getLastRecords() {
    this.http.get('/api/records', { pageSize: 6, transaction_type: 'expense', ledger_id: this.ledger_id }).subscribe((res) => {
      this.lastRecords = res.data.items;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  getRecordAnalysisData() {
    this.http.get('/api/records/analysis', { ledger_id: this.ledger_id }).subscribe((res) => {
      this.recordsAnalysisData = {
        data: res.data,
        xField: 'x',
        yField: 'y',
        meta: {
          x: {
            alias: '日期',
          },
          y: {
            alias: '支出金额',
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
      this.recordsAnalysisLoading = false;
      this.cdr.detectChanges();
    });
  }

  getCategoryiesData() {
    this.http.get('/api/categories/analysis', { ledger_id: this.ledger_id }).subscribe((res) => {
      this.categoriesData = res.data;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  getOverview(): void {
    this.http.get('/api/records/overview', { ledger_id: this.ledger_id }).subscribe((records) => {
      this.recordsOverview = records.data;
      this.water = [...this.recordsOverview].pop();
      this.recordsOverview.pop();
      this.water.percent = ((this.water.overview.surplus / this.water.overview.income) * 100).toFixed(2);
      this.cdr.detectChanges();
    });
  }

  getTags(): void {
    this.http.get('/api/tags', { sort: 'count', ledger_id: this.ledger_id }).subscribe((res) => {
      const data = res.data.items.filter((i: any) => i.count > 0);
      if (data) {
        this.tags = res.data.items.map((item: any) => ({ value: item.count, name: item.name }));
      }
      this.cdr.detectChanges();
    });
  }

  handlePieValueFormat(value: string | number): string {
    return yuan(value);
  }

  handlePieClick(data: G2PieClickItem): void {
    console.log(data);
  }
}
