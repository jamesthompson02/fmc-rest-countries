import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryDetailsService {
  private _countryDetails$: Subject<any> = new Subject<any>();

  public countryDetails$: Observable<any> =
    this._countryDetails$.asObservable();

  public dispatch(country: any) {
    this._countryDetails$.next(country);
  }
}
