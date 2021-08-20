import { DownFileModule } from '@delon/abc/down-file';
import { ExceptionModule } from '@delon/abc/exception';
import { GlobalFooterModule } from '@delon/abc/global-footer';
import { LoadingModule } from '@delon/abc/loading';
import { NoticeIconModule } from '@delon/abc/notice-icon';
import { PageHeaderModule } from '@delon/abc/page-header';
import { QRModule } from '@delon/abc/qr';
import { ResultModule } from '@delon/abc/result';
// import { ReuseTabModule } from '@delon/abc/reuse-tab';
import { SEModule } from '@delon/abc/se';
import { STModule } from '@delon/abc/st';
import { SVModule } from '@delon/abc/sv';
import { TagSelectModule } from '@delon/abc/tag-select';
import { XlsxModule } from '@delon/abc/xlsx';
import { ChartEChartsModule } from '@delon/chart/chart-echarts';
import { G2CustomModule } from '@delon/chart/custom';
import { G2MiniProgressModule } from '@delon/chart/mini-progress';
import { NumberInfoModule } from '@delon/chart/number-info';
import { TrendModule } from '@delon/chart/trend';
import { CurrencyPipeModule } from '@delon/util/pipes/currency';

export const SHARED_DELON_MODULES = [
  PageHeaderModule,
  ResultModule,
  ExceptionModule,
  NoticeIconModule,
  GlobalFooterModule,
  STModule,
  SEModule,
  SVModule,
  TagSelectModule,
  DownFileModule,
  TrendModule,
  G2CustomModule,
  XlsxModule,
  NumberInfoModule,
  G2MiniProgressModule,
  QRModule,
  LoadingModule,
  ChartEChartsModule,
  CurrencyPipeModule
  // ReuseTabModule,
];
