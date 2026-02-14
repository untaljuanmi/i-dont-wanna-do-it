import { Component, input } from '@angular/core';

@Component({
  selector: 'my-card-header',
  templateUrl: './my-card-header.component.html',
})
export class MyCardHeaderComponent {
  divider = input<boolean>(false);
}
