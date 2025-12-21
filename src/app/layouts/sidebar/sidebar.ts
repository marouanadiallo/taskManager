import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

declare type MenuType = {
  text: string;
  icon: string;
  route?: string;
};

@Component({
  selector: 'tsk-sidebar',
  imports: [MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatToolbarModule, RouterOutlet, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {

  menus = signal<MenuType[]>(
    [
      { text: 'Task manager', icon: 'format_list_bulleted_add', route: '/tasks' },
      { text: 'Admin', icon: 'settings', route: '/admin' },
      { text: 'Contact', icon: 'contacts', route: '/contact' },
    ]
  );

}
