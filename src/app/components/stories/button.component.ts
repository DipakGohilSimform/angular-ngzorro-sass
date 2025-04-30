import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-storybook-button',
  standalone: true,
  imports: [CommonModule],
  template: ` <button
    type="button"
    (click)="doClick.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }">
    {{ label }}
  </button>`,
  styleUrls: ['./button.css'],
})
export class ButtonComponent {
  @Input()
  primary = false;

  @Input()
  backgroundColor?: string;

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  @Output()
  doClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary
      ? 'storybook-button--primary'
      : 'storybook-button--secondary';

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
}
