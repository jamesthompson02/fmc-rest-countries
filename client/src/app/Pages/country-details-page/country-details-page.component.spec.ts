import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsPageComponent } from './country-details-page.component';

describe('CountryDetailsPageComponent', () => {
  let component: CountryDetailsPageComponent;
  let fixture: ComponentFixture<CountryDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryDetailsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
