import { Component, OnDestroy, OnInit } from '@angular/core';
import { CacheService } from '@delon/cache';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-pricing-form',
  templateUrl: './form.component.html',
})
export class PricingFormComponent implements OnInit, OnDestroy {
  buy_url: string;
  out_sn: string;
  check: any;

  constructor(private http: _HttpClient, private modal: NzModalRef, private msgSrv: NzMessageService) {}

  ngOnInit(): void {
    this.loadQrcode();
  }

  loadQrcode() {
    this.http.post('/api/users/upgrade-to-pro-request').subscribe((res: any) => {
      if (res.code !== 0) {
        this.msgSrv.warning(res.message);
        return;
      }
      this.buy_url = res.data.qrCode;
      this.out_sn = res.data.record.out_sn;
      this.check = setInterval(() => this.checkReocrd(this.out_sn), 1000 * 3);
    });
  }

  checkReocrd(out_sn: string) {
    this.http.get(`/api/users/pro-record/${out_sn}`).subscribe((res: any) => {
      if (res.code !== 0) {
        this.msgSrv.warning(res.message);
        return;
      }
      if (res.data.status === 'paid') {
        this.modal.close(true);
      }
    });
  }

  close() {
    this.modal.destroy();
  }

  ngOnDestroy() {
    if (this.check) {
      clearInterval(this.check);
    }
  }
}
