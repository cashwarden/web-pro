import { DownFileModule } from '@delon/abc/down-file';
import { ExceptionModule } from '@delon/abc/exception';
import { GlobalFooterModule } from '@delon/abc/global-footer';
import { NoticeIconModule } from '@delon/abc/notice-icon';
import { PageHeaderModule } from '@delon/abc/page-header';
import { ResultModule } from '@delon/abc/result';
// import { ReuseTabModule } from '@delon/abc/reuse-tab';
import { SEModule } from '@delon/abc/se';
import { SidebarNavModule } from '@delon/abc/sidebar-nav';
import { STModule } from '@delon/abc/st';
import { SVModule } from '@delon/abc/sv';
import { TagSelectModule } from '@delon/abc/tag-select';
import { XlsxModule } from '@delon/abc/xlsx';
import { G2CustomModule } from '@delon/chart/custom';
import { G2MiniProgressModule } from '@delon/chart/mini-progress';
import { NumberInfoModule } from '@delon/chart/number-info';
import { TrendModule } from '@delon/chart/trend';
import { QRModule } from '@delon/abc/qr';
import { LoadingModule } from '@delon/abc/loading';

export const SHARED_DELON_MODULES = [
  PageHeaderModule,
  ResultModule,
  ExceptionModule,
  NoticeIconModule,
  SidebarNavModule,
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
  // ReuseTabModule,
];
