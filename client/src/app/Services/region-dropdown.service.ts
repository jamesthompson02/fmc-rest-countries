import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegionDropdownService {
  private _dropdownOption$: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  public dropdownOption$: Observable<string> =
    this._dropdownOption$.asObservable();

  public dispatch(dropdownOption: string) {
    this._dropdownOption$.next(dropdownOption);
  }
}
