import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ToggleComponent } from '../toggle/toggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HeaderComponent, ToggleComponent, MatSlideToggleModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
