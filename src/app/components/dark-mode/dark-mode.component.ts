import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css']
})
export class DarkModeComponent {

  darkMode = false;

  constructor(private renderer: Renderer2) { }

  
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.applyDarkMode();
  }

  applyDarkMode() {
    if (this.darkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }
}
