import { Component, OnDestroy } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NumberFormatterPipe } from '../../Pipes/number-formatter.pipe';
import countries from '../../Data/countries.json';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { CountryDetailsService } from '../../Services/country-details.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-details-text',
  standalone: true,
  imports: [HeaderComponent, NumberFormatterPipe, RouterLink, ButtonComponent],
  templateUrl: './country-details-text.component.html',
  styleUrl: './country-details-text.component.scss',
})
export class CountryDetailsTextComponent implements OnDestroy {
  name: string = '';
  population: string = '';
  region: string = '';
  subregion: string = '';
  capital: string = '';

  currenciesList: { [key: string]: string }[] = [];
  languagesList: { [key: string]: string }[] = [];
  borderCountryList: { name: string | undefined; cca3: string }[] = [];

  countrySubscription: Subscription;

  constructor(private countryDetailsService: CountryDetailsService) {
    this.countrySubscription =
      this.countryDetailsService.countryDetails$.subscribe((country) => {
        this.name = country.name.common;
        this.population = country.population.toString();
        this.region = country.region;
        this.subregion = country.subregion;
        this.capital = country.capital;
        this.currenciesList = Object.entries(country.currencies).map(
          ([, value]) => value as { [key: string]: string }
        );
        this.languagesList = Object.entries(country.languages).map(
          ([, value]) => value as { [key: string]: string }
        );
        this.borderCountryList = country.borders.map((countryCode: string) => {
          const borderCountry = countries.find(
            (country) => country['cca3'] === countryCode
          );
          return { name: borderCountry?.name.common, cca3: countryCode };
        });
      });
  }

  ngOnDestroy(): void {
    if (this.countrySubscription) {
      this.countrySubscription.unsubscribe();
    }
  }
}
