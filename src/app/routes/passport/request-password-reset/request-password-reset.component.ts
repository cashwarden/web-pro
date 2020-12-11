import { Component } from '@angular/core';
import { SFSchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'passport-request-password-reset',
  templateUrl: './request-password-reset.component.html',
  styleUrls: ['./request-password-reset.component.less'],
})
export class UserRequestPasswordResetComponent {
  schema: SFSchema = {
    properties: {
      email: {
        type: 'string',
        format: 'email',
        title: '邮箱',
      },
    },
    required: ['email'],
  };

  constructor(private msg: NzMessageService, private http: _HttpClient) {}

  submit(value: {}): void {
    this.http.post(`/api/users/password-reset-request?_allow_anonymous=true`, value).subscribe((res: any) => {
      if (res.code !== 0) {
        this.msg.warning(res.message);
        return;
      }
      this.msg.success('操作成功，请检查您的邮箱。');
    });
  }
}
