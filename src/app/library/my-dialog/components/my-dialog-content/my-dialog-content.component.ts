import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-dialog-content',
  templateUrl: './my-dialog-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyDialogContentComponent {}
