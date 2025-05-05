import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule, NzCheckboxModule],
  template: `
    <span
      nz-checkbox
      [(ngModel)]="checked"
      [nzDisabled]="disabled"
      (ngModelChange)="onChange($event)">
      {{ label }}
    </span>
  `,
})
export class CheckboxComponent {
  @Input() label = '';
  @Input() checked = false;
  @Input() disabled = false;

  @Output() checkedChange = new EventEmitter<boolean>();

  onChange(checked: boolean): void {
    this.checkedChange.emit(checked);
  }
}
