import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';

@Component({
  selector: 'my-expansion-drawer',
  templateUrl: './my-expansion-drawer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyExpansionDrawerComponent {
  minWidth = input.required<number>();
  width = input.required<number>();
  isExpanded = model.required<boolean>();
}
