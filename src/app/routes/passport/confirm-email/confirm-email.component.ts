import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'passport-confirm-email',
  templateUrl: './confirm-email.component.html',
})
export class UserConfirmEmailComponent {
  result = { type: '', message: '' };
  constructor(route: ActivatedRoute, public msg: NzMessageService, private http: _HttpClient) {
    const token = route.snapshot.queryParams.token;
    if (!token) {
      this.result = { type: 'error', message: '链接错误' };
    } else {
      this.http.post('/api/user/confirm?_allow_anonymous=true', { token }).subscribe((res: any) => {
        if (res.code !== 0) {
          this.result = { type: 'error', message: res.message };
          return;
        }
        this.result = { type: 'success', message: '您的账户激活成功' };
      });
    }
  }
}
