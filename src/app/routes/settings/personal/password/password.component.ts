import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { TitleService, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-settings-password',
  templateUrl: './password.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsPasswordComponent implements OnInit {
  form: FormGroup;

  constructor(
    fb: FormBuilder,
    private http: _HttpClient,
    private titleSrv: TitleService,
    private msg: NzMessageService,
    private router: Router,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
  ) {
    this.form = fb.group(
      {
        old_password: [null, [Validators.required]],
        new_password: [null, [Validators.required, Validators.minLength(6)]],
        retype_password: [null, [Validators.required, Validators.minLength(6)]],
      },
      { validator: this.matchingPasswords('new_password', 'retype_password') },
    );
  }

  ngOnInit() {
    this.titleSrv.setTitle('修改密码');
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

  save(): void {
    const data = this.form.value;
    this.http.post(`/api/users/change-password`, data).subscribe((res: any) => {
      if (res.code !== 0) {
        this.msg.warning(res.message);
        return;
      }
      this.tokenService.clear();
      this.router.navigateByUrl(this.tokenService.login_url);
    });
  }
}
