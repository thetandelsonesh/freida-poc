import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityDetail } from './speciality-detail';

describe('SpecialityDetail', () => {
  let component: SpecialityDetail;
  let fixture: ComponentFixture<SpecialityDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialityDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialityDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
