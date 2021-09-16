import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillHoleListComponent } from './drill-hole-list.component';

describe('DrillHoleListComponent', () => {
  let component: DrillHoleListComponent;
  let fixture: ComponentFixture<DrillHoleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrillHoleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillHoleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
