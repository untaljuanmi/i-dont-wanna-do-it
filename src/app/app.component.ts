import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MyToastContainerComponent } from './library/my-toast/components/my-toast-container/my-toast-container.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyToastContainerComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
