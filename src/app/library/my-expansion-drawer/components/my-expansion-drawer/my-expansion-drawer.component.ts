import { Component, input, model } from '@angular/core';

@Component({
  selector: 'my-expansion-drawer',
  templateUrl: './my-expansion-drawer.component.html',
})
export class MyExpansionDrawerComponent {
  minWidth = input.required<number>();
  width = input.required<number>();
  isExpanded = model.required<boolean>();
}
