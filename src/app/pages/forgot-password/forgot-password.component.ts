import { Component, ViewEncapsulation } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import {
  NzFormControlComponent,
  NzFormItemComponent,
  NzFormLabelComponent,
} from 'ng-zorro-antd/form';
import { NzInputGroupComponent } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    NzFormControlComponent,
    NzInputGroupComponent,
    NzFormItemComponent,
    NzButtonComponent,
    NzFormLabelComponent,
    AngularSvgIconModule,
    NzToolTipModule,
    NzSelectModule,
    NzIconModule,
    RouterModule,
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {}
