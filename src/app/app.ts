import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'tsk-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styles:` :host {
    display: block;
    height: 100%;
  } `,
})
export class App {
  protected readonly title = signal('task-manager');
}
