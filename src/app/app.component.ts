import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzI18nService, NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class AppComponent {
  title = 'angular-ngzorro-sass';
  constructor(private i18n: NzI18nService) {
    this.i18n.setLocale(en_US);
  }
}
