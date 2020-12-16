import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-ledger-confirm-join',
  templateUrl: './confirm-join.component.html',
  styleUrls: ['./confirm-join.component.less'],
})
export class LedgerConfirmJoinComponent implements OnInit {
  token: string;
  ledger: any;

  constructor(private msg: NzMessageService, private http: _HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParams.token;
    this.http.get(`/api/ledgers/token/${this.token}`).subscribe((res: any) => {
      if (res.code !== 0) {
        this.msg.warning(res.message);
        return;
      }
      this.ledger = res.data;
    });
  }

  submit(value: {}): void {
    this.http.post(`/api/ledgers/join/${this.token}`).subscribe((res: any) => {
      if (res.code !== 0) {
        this.msg.warning(res.message);
        this.router.navigateByUrl('/ledger/index');
        return;
      }
      this.msg.success('加入成功');
      this.router.navigateByUrl('/ledger/index');
    });
  }
}
