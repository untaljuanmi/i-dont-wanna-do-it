import { Component, inject } from '@angular/core';

import { MyDialogRef } from '../../models';

@Component({
  selector: 'my-dialog-header',
  templateUrl: './my-dialog-header.html',
})
export class MyDialogHeader {
  myDialogRef = inject(MyDialogRef);
}
