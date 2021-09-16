import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillHoleDetailComponent } from './drill-hole-detail.component';

describe('DrillHoleDetailComponent', () => {
  let component: DrillHoleDetailComponent;
  let fixture: ComponentFixture<DrillHoleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrillHoleDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillHoleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
