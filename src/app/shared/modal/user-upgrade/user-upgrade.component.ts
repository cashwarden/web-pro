import { Component } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-user-upgrade',
  templateUrl: './user-upgrade.component.html',
})
export class UserUpgradeComponent {
  constructor(private modal: NzModalRef) {}

  close() {
    this.modal.destroy();
  }
}
