import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiableTrainingListComponent } from './fiable-training-list.component';

describe('FiableTrainingListComponent', () => {
  let component: FiableTrainingListComponent;
  let fixture: ComponentFixture<FiableTrainingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiableTrainingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiableTrainingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
