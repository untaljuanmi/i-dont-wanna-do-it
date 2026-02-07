import { NgTemplateOutlet } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './layout/components/navbar/navbar';
import { MyExpansionDrawer } from './library';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, MyExpansionDrawer, NgTemplateOutlet],
  templateUrl: './app.html',
})
export class App {
  minWidth = signal<number>(72);
  width = signal<number>(300);
  isExpanded = signal<boolean>(false);
}
