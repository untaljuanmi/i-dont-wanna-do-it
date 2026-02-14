import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { DateParserPipe } from '../../../library';

@Component({
  selector: 'app-home',
  imports: [TranslatePipe, DateParserPipe],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
  today = signal<Date>(new Date()).asReadonly();
}
