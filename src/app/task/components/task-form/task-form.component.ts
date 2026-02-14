import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MyDialogComponent } from '../../../library';
import { MyDialogContentComponent } from '../../../library/my-dialog/components/my-dialog-content/my-dialog-content.component';
import { MyDialogFooterComponent } from '../../../library/my-dialog/components/my-dialog-footer/my-dialog-footer.component';
import { MyDialogHeaderComponent } from '../../../library/my-dialog/components/my-dialog-header/my-dialog-header.component';

@Component({
  selector: 'app-task-form',
  imports: [
    MyDialogComponent,
    MyDialogHeaderComponent,
    MyDialogContentComponent,
    MyDialogFooterComponent,
  ],
  templateUrl: './task-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TaskFormComponent {}
