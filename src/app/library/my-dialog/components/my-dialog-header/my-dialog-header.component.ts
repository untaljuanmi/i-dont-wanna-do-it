import { Component, inject } from '@angular/core';

import { MyDialogRefModel } from '../../models';

@Component({
  selector: 'my-dialog-header',
  templateUrl: './my-dialog-header.component.html',
})
export class MyDialogHeaderComponent {
  myDialogRef = inject(MyDialogRefModel);
}
