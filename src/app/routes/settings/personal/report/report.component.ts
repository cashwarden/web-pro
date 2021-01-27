import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TitleService, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-settings-report',
  templateUrl: './report.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsReportComponent implements OnInit {
  url = '/api/users/settings';
  form = {
    daily_report: false,
    weekly_report: false,
    monthly_report: false,
  };

  constructor(private http: _HttpClient, private titleSrv: TitleService, private msg: NzMessageService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.titleSrv.setTitle('设置报告');
    this.load();
  }

  save(value: any): void {
    console.log(value);

    this.http.post(this.url, value).subscribe((res: any) => {
      if (res.code !== 0) {
        this.msg.warning(res.message);
        return;
      }
      this.form = res.data;
      this.msg.success('更新成功');
    });
  }

  load(): void {
    this.http.get(this.url).subscribe((res: any) => {
      if (res.code !== 0) {
        this.msg.warning(res.message);
        return;
      }
      this.form = res.data;
      this.cdr.detectChanges();
    });
  }
}
