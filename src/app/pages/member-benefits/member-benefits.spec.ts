import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberBenefits } from './member-benefits';

describe('MemberBenefits', () => {
  let component: MemberBenefits;
  let fixture: ComponentFixture<MemberBenefits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberBenefits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberBenefits);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
