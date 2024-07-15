import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountrySearchBarService {
  private _userInput$: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );

  public userInput$: Observable<string> = this._userInput$.asObservable();

  public dispatch(userInput: string) {
    this._userInput$.next(userInput);
  }
}
