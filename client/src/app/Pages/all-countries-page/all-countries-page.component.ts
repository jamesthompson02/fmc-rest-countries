import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchbarComponent } from '../../Components/searchbar/searchbar.component';
import { DropdownMenuComponent } from '../../Components/dropdown-menu/dropdown-menu.component';
import countryCards from '../../Data/country-cards.json';
import { CountryCard } from '../../Models/Country-Card.model';
import { CardComponent } from '../../Components/card/card.component';
import { combineLatest, debounceTime, Subscription, tap } from 'rxjs';
import { RegionDropdownService } from '../../Services/region-dropdown.service';
import { CountrySearchBarService } from '../../Services/country-search-bar.service';

@Component({
  selector: 'app-all-countries-page',
  standalone: true,
  imports: [SearchbarComponent, DropdownMenuComponent, CardComponent],
  templateUrl: './all-countries-page.component.html',
  styleUrl: './all-countries-page.component.scss',
  providers: [RegionDropdownService, CountrySearchBarService],
})
export class AllCountriesPageComponent implements OnInit, OnDestroy {
  countries!: CountryCard[];
  userFilters!: Subscription;

  constructor(
    private regionDropdownService: RegionDropdownService,
    private countrySearchBarService: CountrySearchBarService
  ) {}

  ngOnInit(): void {
    this.countries = countryCards;

    this.userFilters = combineLatest([
      this.regionDropdownService.dropdownOption$,
      this.countrySearchBarService.userInput$,
    ])
      .pipe(debounceTime(200))
      .subscribe(([regionDropdownOption, searchbarInput]) => {
        if (!regionDropdownOption && !searchbarInput) {
          this.countries = countryCards;
          return;
        }
        if (!searchbarInput && regionDropdownOption === 'All') {
          this.countries = countryCards;

          return;
        }
        if (searchbarInput && !regionDropdownOption) {
          this.countries = countryCards.filter((country) =>
            country.name.common
              .toLowerCase()
              .includes(searchbarInput.toLowerCase())
          );
          return;
        }
        if (searchbarInput && regionDropdownOption === 'All') {
          this.countries = countryCards.filter((country) =>
            country.name.common
              .toLowerCase()
              .includes(searchbarInput.toLowerCase())
          );

          return;
        }
        if (!searchbarInput && regionDropdownOption !== 'All') {
          this.countries = countryCards.filter(
            (country) => country.region === regionDropdownOption
          );

          return;
        }
        if (searchbarInput && regionDropdownOption !== 'All') {
          this.countries = countryCards.filter(
            (country) =>
              country.region === regionDropdownOption &&
              country.name.common
                .toLowerCase()
                .includes(searchbarInput.toLowerCase())
          );

          return;
        }
      });
  }

  ngOnDestroy(): void {
    this.userFilters.unsubscribe();
  }
}
