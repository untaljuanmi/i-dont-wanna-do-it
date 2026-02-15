import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MyExpansionDrawerComponent } from '../../../library';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-layout',
  imports: [MyExpansionDrawerComponent, NavbarComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LayoutComponent {
  minWidth = signal<number>(72);
  width = signal<number>(300);
  isExpanded = signal<boolean>(false);
}
