import { 
  AfterViewInit,
  ChangeDetectionStrategy, 
  Component, 
  OnInit, 
  signal, 
  viewChild, 
} from '@angular/core';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatListModule } from '@angular/material/list';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';


declare type MenuType = {
  text: string;
  icon: string;
  route?: string;
};

@Component({
  selector: 'tsk-home',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,

    MatListModule,

    RouterOutlet,
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements OnInit, AfterViewInit { // home allouer

  //
  menus = signal<MenuType[]>(
    [
      { text: 'Task manager', icon: 'format_list_bulleted_add', route: 'tasks' },
      { text: 'Admin', icon: 'settings' },
      { text: 'Contact', icon: 'contacts' },
    ]
  );

  sideNavSignal = viewChild.required<MatDrawer>('sideNav');
  aboutLinkSignal = viewChild('aboutLink');

  labelText = 'Sign in';

  constructor() {
    console.log('Home component constructor called');
  }

  ngOnInit(): void {
    console.log('$_OnInit_Home component initialized');
    console.log('sidenav on init:', this.sideNavSignal());
    console.log('aboutLink on init:', this.aboutLinkSignal());
  }

  ngAfterViewInit(): void {
    console.log('$_AfterViewInit_Home component content initialized');
    console.log('sidenav after view init:', this.sideNavSignal());
    console.log('aboutLink after view init:', this.aboutLinkSignal());
  }

  logEvent(event: any) {
    console.log('Button clicked event received in Home component:', event);
  }

  toggleSideNavHandler() {
    const sideNav = this.sideNavSignal();
    // width > 600px
    if(sideNav && sideNav.mode === 'side') {
      sideNav.toggle();
    }
  }
}
