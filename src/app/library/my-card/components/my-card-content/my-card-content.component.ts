import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-card-content',
  templateUrl: './my-card-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyCardContentComponent {}
