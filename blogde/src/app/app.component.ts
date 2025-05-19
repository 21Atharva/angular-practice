import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  constructor(private themeService: ThemeService) {}
  ngOnInit() {
    this.themeService.initTheme();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
