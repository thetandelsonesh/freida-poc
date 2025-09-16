import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidencyCalculator } from './residency-calculator';

describe('ResidencyCalculator', () => {
  let component: ResidencyCalculator;
  let fixture: ComponentFixture<ResidencyCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidencyCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidencyCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
