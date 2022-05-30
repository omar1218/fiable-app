import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiablePromotionEligibilityComponent } from './fiable-promotion-eligibility.component';

describe('FiablePromotionEligibilityComponent', () => {
  let component: FiablePromotionEligibilityComponent;
  let fixture: ComponentFixture<FiablePromotionEligibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiablePromotionEligibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiablePromotionEligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
