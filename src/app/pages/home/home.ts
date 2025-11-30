import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ButtonCustomized } from '../../shared/components/button-customized/button-customized';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'tsk-home',
  imports: [
    ButtonCustomized,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  labelText = 'Sign in';

  logEvent(event: any) {
    console.log('Button clicked event received in Home component:', event);
  }
}
