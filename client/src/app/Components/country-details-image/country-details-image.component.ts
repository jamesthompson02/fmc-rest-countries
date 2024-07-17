import { Component, Input, OnDestroy } from '@angular/core';
import { CountryDetailsService } from '../../Services/country-details.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-details-image',
  standalone: true,
  imports: [],
  templateUrl: './country-details-image.component.html',
  styleUrl: './country-details-image.component.scss',
})
export class CountryDetailsImageComponent implements OnDestroy {
  src: string = '';
  alt: string = '';

  countryFlagDetailsSubscription: Subscription;

  constructor(private countryDetailsService: CountryDetailsService) {
    this.countryFlagDetailsSubscription =
      this.countryDetailsService.countryDetails$.subscribe((country) => {
        this.src = country.flags.png;
        this.alt = `Flag of ${country.name.common}`;
      });
  }

  ngOnDestroy(): void {
    if (this.countryFlagDetailsSubscription) {
      this.countryFlagDetailsSubscription.unsubscribe();
    }
  }
}
