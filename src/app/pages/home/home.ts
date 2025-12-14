import { 
  ChangeDetectionStrategy, 
  Component, 
  signal 
} from '@angular/core';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';


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
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {

  menus = signal<MenuType[]>(
    [
      { text: 'Task manager', icon: 'format_list_bulleted_add' },
      { text: 'Admin', icon: 'settings' },
      { text: 'Contact', icon: 'contacts' },
    ]
  );



  labelText = 'Sign in';

  logEvent(event: any) {
    console.log('Button clicked event received in Home component:', event);
  }
}
