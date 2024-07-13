import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsImageComponent } from './country-details-image.component';

describe('CountryDetailsImageComponent', () => {
  let component: CountryDetailsImageComponent;
  let fixture: ComponentFixture<CountryDetailsImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryDetailsImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryDetailsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
