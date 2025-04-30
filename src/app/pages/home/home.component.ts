import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NzButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  currentTheme = 'default';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    // Check if there's a saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'default';
    this.currentTheme = savedTheme;
    document.body.classList.add(this.currentTheme);
  }

  setTheme(theme: string): void {
    document.body.classList.remove(this.currentTheme);
    this.currentTheme = theme;
    document.body.classList.add(this.currentTheme);
    localStorage.setItem('theme', theme);
  }

  toggleTheme(): void {
    const newTheme = this.currentTheme === 'default' ? 'dark' : 'default';
    this.setTheme(newTheme);
  }
}
