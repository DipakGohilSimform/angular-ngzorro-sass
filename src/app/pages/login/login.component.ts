import { Component, inject, ViewEncapsulation } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzCheckboxComponent } from 'ng-zorro-antd/checkbox';
import {
  NzFormControlComponent,
  NzFormItemComponent,
  NzFormLabelComponent,
} from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputGroupComponent } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NzFormControlComponent,
    NzInputGroupComponent,
    NzFormItemComponent,
    NzButtonComponent,
    NzCheckboxComponent,
    NzFormLabelComponent,
    NzIconModule,
    RouterModule,
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly router = inject(Router);
  passwordVisible = false;
  password?: string;
  onSubmit(): void {
    this.router.navigate(['/dashboard']);
  }
}
