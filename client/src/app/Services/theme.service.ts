import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDark = signal<boolean>(false);

  constructor() {}

  setTheme(theme: boolean) {
    this.isDark.set(theme);
  }

  updateTheme() {
    this.isDark.update((currentValue) => !currentValue);
  }
}
