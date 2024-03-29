import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, SettingsService, TitleService, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { from } from 'rxjs';

@Component({
  selector: 'app-settings-base',
  templateUrl: './base.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsBaseComponent implements OnInit {
  form = {
    username: '',
    email: '',
    status: 'unactivated',
    base_currency_code: 'CNY',
  };

  constructor(
    private http: _HttpClient,
    private settings: SettingsService,
    private titleSrv: TitleService,
    private msg: NzMessageService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.titleSrv.setTitle('基本设置');
    this.load();
  }

  save(value: any): void {
    this.http.post(`/api/users/me`, value).subscribe((res: any) => {
      if (res.code !== 0) {
        this.msg.warning(res.message);
        return;
      }
      const user = { name: res.data.username, email: res.data.email, avatar: res.data.avatar };
      this.settings.setUser(user);
      this.form = res.data;
      this.msg.success('更新成功');
    });
  }

  sendEmail(): void {
    this.http.post(`/api/users/send-confirmation`).subscribe((res: any) => {
      if (res.code !== 0) {
        this.msg.warning(res.message);
        return;
      }
      this.form.status = '';
      this.cdr.detectChanges();
      this.msg.success(res.data);
    });
  }

  load(): void {
    this.http.get(`/api/users/me`).subscribe((res: any) => {
      if (res.code !== 0) {
        this.msg.warning(res.message);
        return;
      }
      this.form = res.data;
      this.cdr.detectChanges();
    });
  }
}
