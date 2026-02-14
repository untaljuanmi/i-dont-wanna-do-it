import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MyDialog } from '../../../library';
import { MyDialogContent } from '../../../library/my-dialog/components/my-dialog-content/my-dialog-content';
import { MyDialogFooter } from '../../../library/my-dialog/components/my-dialog-footer/my-dialog-footer';
import { MyDialogHeader } from '../../../library/my-dialog/components/my-dialog-header/my-dialog-header';

@Component({
  selector: 'app-task-form',
  imports: [MyDialog, MyDialogHeader, MyDialogContent, MyDialogFooter],
  templateUrl: './task-form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TaskForm {}
