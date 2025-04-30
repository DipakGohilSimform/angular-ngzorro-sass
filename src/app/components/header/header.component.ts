import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NzPageHeaderModule,
    CommonModule,
    NzButtonComponent,
    NzDrawerModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  public isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 0;
  }
  openGithubRepo(): void {
    window.open(
      'https://github.com/DipakGohilSimform/angular-ngzorro-styled',
      '_blank'
    );
  }
}
