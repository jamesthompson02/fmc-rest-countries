import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsTextComponent } from './country-details-text.component';

describe('CountryDetailsTextComponent', () => {
  let component: CountryDetailsTextComponent;
  let fixture: ComponentFixture<CountryDetailsTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryDetailsTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryDetailsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
