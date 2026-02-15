import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { MyToastService } from '../../services';
import { MyToastContainerPositionType } from '../../types';
import { MyToastComponent } from '../my-toast/my-toast.component';

@Component({
  selector: 'my-toast-container',
  templateUrl: './my-toast-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MyToastComponent],
  host: {
    '[class]': 'position()',
  },
})
export class MyToastContainerComponent {
  private _myToastService = inject(MyToastService);

  position = input<MyToastContainerPositionType>('bc');

  toasts = this._myToastService.toasts.asReadonly();
}
