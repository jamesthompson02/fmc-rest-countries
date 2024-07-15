import { Component } from '@angular/core';
import { RegionDropdownService } from '../../Services/region-dropdown.service';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss',
})
export class DropdownMenuComponent {
  regions: string[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'All',
  ];

  constructor(private regionDropdownService: RegionDropdownService) {}

  onChange(e: Event) {
    const selectedDropdownOption = (e.target as HTMLSelectElement).value;
    this.regionDropdownService.dispatch(selectedDropdownOption);
  }
}
