import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunReportsComponent } from './run-reports.component';

describe('RunReportsComponent', () => {
  let component: RunReportsComponent;
  let fixture: ComponentFixture<RunReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
