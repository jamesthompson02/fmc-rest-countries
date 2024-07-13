import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCountriesPageComponent } from './all-countries-page.component';

describe('AllCountriesPageComponent', () => {
  let component: AllCountriesPageComponent;
  let fixture: ComponentFixture<AllCountriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCountriesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCountriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
