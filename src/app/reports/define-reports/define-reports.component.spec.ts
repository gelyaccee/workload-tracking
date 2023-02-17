import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineReportsComponent } from './define-reports.component';

describe('DefineReportsComponent', () => {
  let component: DefineReportsComponent;
  let fixture: ComponentFixture<DefineReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefineReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
