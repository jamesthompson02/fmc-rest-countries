import { Component } from '@angular/core';
import {
  MatSlideToggleChange,
  MatSlideToggleModule,
} from '@angular/material/slide-toggle';
import { ThemeService } from '../../Services/theme.service';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss',
})
export class ToggleComponent {
  constructor(public themeService: ThemeService) {}
  switchTheme(e: Event) {
    console.log((e.target as HTMLInputElement).checked);
    this.themeService.setTheme((e.target as HTMLInputElement).checked);
  }
}
