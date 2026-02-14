import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MyExpansionDrawerComponent } from '../../../library';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-layout',
  imports: [MyExpansionDrawerComponent, Navbar, RouterOutlet],
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LayoutComponent {
  minWidth = signal<number>(72);
  width = signal<number>(300);
  isExpanded = signal<boolean>(false);
}
