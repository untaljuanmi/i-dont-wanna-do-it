import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { MyDialogRefModel } from '../../models';

@Component({
  selector: 'my-dialog-header',
  templateUrl: './my-dialog-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyDialogHeaderComponent {
  myDialogRef = inject(MyDialogRefModel);
}
