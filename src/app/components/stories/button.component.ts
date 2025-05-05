import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-storybook-button',
  standalone: true,
  imports: [CommonModule, NzButtonModule],
  template: `
    <button
      nz-button
      [nzType]="primary ? 'primary' : 'default'"
      [nzSize]="getNzSize()"
      [style.background-color]="backgroundColor"
      (click)="doClick.emit($event)">
      {{ label }}
    </button>
  `,
  styleUrls: ['./button.css'],
})
export class ButtonComponent {
  /** Is this the principal call to action on the page? */
  @Input()
  primary = false;

  /** What background color to use */
  @Input()
  backgroundColor?: string;

  /** How large should the button be? */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /** Optional click handler */
  @Output()
  doClick = new EventEmitter<Event>();

  // Convert size format to NG-Zorro's size values
  getNzSize(): 'large' | 'default' | 'small' {
    switch (this.size) {
      case 'small':
        return 'small';
      case 'large':
        return 'large';
      default:
        return 'default';
    }
  }
}
