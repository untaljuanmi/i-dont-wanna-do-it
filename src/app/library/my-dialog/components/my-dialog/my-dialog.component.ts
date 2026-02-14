import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-dialog',
  templateUrl: './my-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyDialogComponent {}
