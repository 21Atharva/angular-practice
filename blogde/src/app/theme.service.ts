// theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkThemeClass = 'dark-theme';

  enableDarkMode() {
    document.body.classList.add(this.darkThemeClass);
    localStorage.setItem('theme', 'dark');
  }

  enableLightMode() {
    document.body.classList.remove(this.darkThemeClass);
    localStorage.setItem('theme', 'light');
  }

  initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.enableDarkMode();
    } else {
      this.enableLightMode();
    }
  }

  toggleTheme() {
    const isDark = document.body.classList.contains(this.darkThemeClass);
    isDark ? this.enableLightMode() : this.enableDarkMode();
  }
}
