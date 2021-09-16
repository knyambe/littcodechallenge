import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillHoleContainerComponent } from './drill-hole-container.component';

describe('DrillHoleContainerComponent', () => {
  let component: DrillHoleContainerComponent;
  let fixture: ComponentFixture<DrillHoleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrillHoleContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillHoleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
