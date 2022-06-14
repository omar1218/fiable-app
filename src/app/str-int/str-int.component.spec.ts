import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrIntComponent } from './str-int.component';

describe('StrIntComponent', () => {
  let component: StrIntComponent;
  let fixture: ComponentFixture<StrIntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrIntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrIntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
