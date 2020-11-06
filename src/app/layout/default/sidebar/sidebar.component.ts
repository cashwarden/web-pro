import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CacheService } from '@delon/cache';
import { _HttpClient } from '@delon/theme';
import { params } from 'src/app/shared/params';

@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  loading = true;
  list = [];
  ledger: any;

  constructor(private http: _HttpClient, private cache: CacheService, private cdr: ChangeDetectorRef) {
    this.getDefaultLedger();
    this.getData();
  }

  getData(): void {
    this.loading = true;
    this.http.get('/api/ledgers').subscribe((res) => {
      this.list = res.data.items;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  changeLedger(data: { id: number; name: string }): void {
    this.ledger = data;
    this.cache.set(params.cacheKey.defaultLedger, data);
    window.location.reload();
  }

  getDefaultLedger(): void {
    this.ledger = this.cache.getNone(params.cacheKey.defaultLedger);
  }
}
