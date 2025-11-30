import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonCustomized } from '../../shared/components/button-customized/button-customized';

@Component({
  selector: 'tsk-home',
  imports: [
    ButtonCustomized
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
