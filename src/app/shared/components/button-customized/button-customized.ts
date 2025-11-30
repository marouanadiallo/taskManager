import { 
  ChangeDetectionStrategy, 
  Component, 
  input, 
  model, 
  output
} from '@angular/core';

@Component({
  selector: 'tsk-button-customized',
  template: `
    <button [type]="typeName" [class]="'primary ' + class" (click)="onClick()">
      {{ label() }}
    </button>
  `,
  imports: [
  ],
  styleUrls: ['./button-customized.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'button-customized',
    'click': '_onClick()'
  }
})
export class ButtonCustomized {
  typeName: string = 'button';
  class: string = 'btn';

  label = input();
  clickEvent = output<void>();

  onClick() {    
    this.clickEvent.emit();
  }

  _onClick() {
    this.onClick();
  }

  _disabled = model(false);
}
