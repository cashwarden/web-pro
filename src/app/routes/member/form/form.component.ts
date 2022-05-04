import { Component, OnInit } from '@angular/core';
import { CacheService } from '@delon/cache';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { params } from 'src/app/shared/params';

@Component({
  selector: 'app-member-form',
  templateUrl: './form.component.html',
})
export class MemberFormComponent implements OnInit {
  record: any = {};
  types: [];

  form = {
    username: '',
    email: '',
    password: '',
    role: '',
  };
  codes: [{ code: string, name: string }];

  constructor(private http: _HttpClient, private modal: NzModalRef, private msgSrv: NzMessageService, private cache: CacheService) {
  }

  ngOnInit(): void {
    if (this.record.id) {
      this.form = this.record;
    }
  }

  save(value: any) {
    const url = this.record.id ? `/${this.record.id}` : '';
    const method = this.record.id ? 'put' : 'post';
    this.http.request(method, `/api/members${url}`, { body: value }).subscribe((res: any) => {
      if (res.code !== 0) {
        this.msgSrv.warning(res.message);
        return;
      }
      this.msgSrv.success('保存成功');
      this.modal.close(res.data);
    });
  }

  close() {
    this.modal.destroy();
  }
}
