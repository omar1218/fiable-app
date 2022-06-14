import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropetyBindComponent } from './propety-bind.component';

describe('PropetyBindComponent', () => {
  let component: PropetyBindComponent;
  let fixture: ComponentFixture<PropetyBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropetyBindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropetyBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
