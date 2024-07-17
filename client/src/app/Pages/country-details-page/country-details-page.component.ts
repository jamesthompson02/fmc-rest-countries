import { Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonComponent } from '../../Components/button/button.component';
import { Location } from '@angular/common';
import { CountryDetailsImageComponent } from '../../Components/country-details-image/country-details-image.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import countries from '../../Data/countries.json';
import { CountryDetailsTextComponent } from '../../Components/country-details-text/country-details-text.component';
import { Subscription } from 'rxjs';
import { CountryDetailsService } from '../../Services/country-details.service';

@Component({
  selector: 'app-country-details-page',
  standalone: true,
  imports: [
    ButtonComponent,
    CountryDetailsImageComponent,
    CountryDetailsTextComponent,
  ],
  templateUrl: './country-details-page.component.html',
  styleUrl: './country-details-page.component.scss',
})
export class CountryDetailsPageComponent implements OnInit, OnDestroy {
  country: any;
  countrySubscription!: Subscription;

  constructor(
    private _location: Location,
    private activatedRoute: ActivatedRoute,
    private countryDetails: CountryDetailsService
  ) {}

  ngOnInit(): void {
    this.countrySubscription = this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        const countryName = params.get('country');
        const country = countries.find(
          (country) => country.name.common === countryName
        );
        country && this.countryDetails.dispatch(country);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.countrySubscription) {
      this.countrySubscription.unsubscribe();
    }
  }

  backClicked() {
    this._location.back();
  }
}
