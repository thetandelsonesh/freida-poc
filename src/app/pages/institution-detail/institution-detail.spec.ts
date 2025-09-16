import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionDetail } from './institution-detail';

describe('InstitutionDetail', () => {
  let component: InstitutionDetail;
  let fixture: ComponentFixture<InstitutionDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
