import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacantPositions } from './vacant-positions';

describe('VacantPositions', () => {
  let component: VacantPositions;
  let fixture: ComponentFixture<VacantPositions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacantPositions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacantPositions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
