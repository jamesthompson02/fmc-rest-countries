import { Component, Input } from '@angular/core';
import { CountrySearchBarService } from '../../Services/country-search-bar.service';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss',
})
export class SearchbarComponent {
  @Input() placeholder?: string;

  constructor(private countrySearchBarService: CountrySearchBarService) {}

  onKeyUp(e: Event) {
    const userInput = (e.target as HTMLInputElement).value;
    this.countrySearchBarService.dispatch(userInput);
  }
}
