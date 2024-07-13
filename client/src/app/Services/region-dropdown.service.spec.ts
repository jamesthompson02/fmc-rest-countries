import { TestBed } from '@angular/core/testing';

import { RegionDropdownService } from './region-dropdown.service';

describe('RegionDropdownService', () => {
  let service: RegionDropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegionDropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
