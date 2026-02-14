import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-card',
  templateUrl: './my-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyCardComponent {}
