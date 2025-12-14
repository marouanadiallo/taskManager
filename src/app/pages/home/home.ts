import { ChangeDetectionStrategy, Component, ViewChild, signal } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'tsk-home',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  @ViewChild('drawer') drawer!: MatDrawer;
  sidebarOpen = signal(true);

  labelText = 'Sign in';

  toggleSidebar() {
    this.drawer.toggle();
    this.sidebarOpen.set(!this.sidebarOpen());
  }

  logEvent(event: any) {
    console.log('Button clicked event received in Home component:', event);
  }
}
