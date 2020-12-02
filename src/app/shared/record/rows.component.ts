import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
@Component({
  selector: 'app-record-rows',
  templateUrl: './rows.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecordRowsComponent {
  @Input() items: Array<{ date: string; out: string; in: string; records: [] }> = [];
}
