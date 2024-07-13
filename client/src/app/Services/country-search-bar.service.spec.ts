import { TestBed } from '@angular/core/testing';

import { CountrySearchBarService } from './country-search-bar.service';

describe('CountrySearchBarService', () => {
  let service: CountrySearchBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountrySearchBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
