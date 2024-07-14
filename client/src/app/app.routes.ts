import { Routes } from '@angular/router';
import { AllCountriesPageComponent } from './Pages/all-countries-page/all-countries-page.component';
import { CountryDetailsPageComponent } from './Pages/country-details-page/country-details-page.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  { path: 'countries', component: AllCountriesPageComponent },
  { path: 'countries/:country', component: CountryDetailsPageComponent },
  { path: '', redirectTo: '/countries', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },
];
