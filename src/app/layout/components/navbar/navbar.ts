import { ChangeDetectionStrategy, Component, inject, model } from '@angular/core';

import { AuthService } from '../../../auth';
import { MyDialogService } from '../../../library/my-dialog/services';
import TaskFormComponent from '../../../task/components/task-form/task-form.component';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  private _authService = inject(AuthService);
  private _myDialogService = inject(MyDialogService);

  isExpanded = model<boolean>(false);

  onClickAddTask(): void {
    this._myDialogService.open(TaskFormComponent);
  }

  onClickSignOut(): void {
    this._authService.signOut();
  }
}
