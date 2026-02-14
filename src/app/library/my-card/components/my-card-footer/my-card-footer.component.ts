import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-card-footer',
  templateUrl: './my-card-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyCardFooterComponent {}
