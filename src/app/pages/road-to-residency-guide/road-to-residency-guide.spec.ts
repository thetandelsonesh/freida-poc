import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadToResidencyGuide } from './road-to-residency-guide';

describe('RoadToResidencyGuide', () => {
  let component: RoadToResidencyGuide;
  let fixture: ComponentFixture<RoadToResidencyGuide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadToResidencyGuide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadToResidencyGuide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
