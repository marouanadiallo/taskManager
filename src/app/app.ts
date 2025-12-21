import { Component, signal } from '@angular/core';
import { Sidebar } from './layouts/sidebar/sidebar';

@Component({
  selector: 'tsk-root',
  imports: [Sidebar],
  templateUrl: './app.html',
  styles:` :host {
    display: block;
    height: 100%;
  } `,
})
export class App {
  protected readonly title = signal('task-manager');
}
