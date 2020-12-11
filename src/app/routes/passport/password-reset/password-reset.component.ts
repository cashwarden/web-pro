import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { TitleService, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'passport-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.less'],
})
export class UserPasswordResetComponent implements OnInit {
  form: FormGroup;
  token: string;

  constructor(
    fb: FormBuilder,
    private http: _HttpClient,
    private msg: NzMessageService,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
  ) {
    this.form = fb.group(
      {
        password: [null, [Validators.required, Validators.minLength(6)]],
        retype_password: [null, [Validators.required, Validators.minLength(6)]],
      },
      { validator: this.matchingPasswords('password', 'retype_password') },
    );
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParams.token;
  }

  matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      const passwordInput = group.controls[passwordKey];
      const passwordConfirmationInput = group.controls[passwordConfirmationKey];

      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ notEquivalent: true });
      }
    };
  }

  submit(): void {
    const data = this.form.value;
    data.token = this.token;
    this.http.post(`/api/users/password-reset?_allow_anonymous=true`, data).subscribe((res: any) => {
      if (res.code !== 0) {
        this.msg.warning(res.message);
        return;
      }
      this.msg.success('重置密码成功，请登录。');
      this.tokenService.clear();
      this.router.navigateByUrl(this.tokenService.login_url);
    });
  }
}
