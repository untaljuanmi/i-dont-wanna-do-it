import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { MyToastService } from '../../services';
import { MyToastType } from '../../types';

@Component({
  selector: 'my-toast',
  templateUrl: './my-toast.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': '`my-toast-${type()}`',
    '[class.my-toast-visible]': 'visible()',
  },
})
export class MyToastComponent {
  private _myToastService = inject(MyToastService);

  id = input.required<number>();
  message = input.required<string>();
  type = input.required<MyToastType>();
  visible = input.required<boolean>();

  onClickRemoveToast(): void {
    this._myToastService.remove(this.id());
  }
}
