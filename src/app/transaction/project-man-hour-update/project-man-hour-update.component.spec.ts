import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManHourUpdateComponent } from './project-man-hour-update.component';

describe('ProjectManHourUpdateComponent', () => {
  let component: ProjectManHourUpdateComponent;
  let fixture: ComponentFixture<ProjectManHourUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManHourUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectManHourUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
