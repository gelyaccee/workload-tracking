import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManpowerComponent } from './project-manpower.component';

describe('ProjectManpowerComponent', () => {
  let component: ProjectManpowerComponent;
  let fixture: ComponentFixture<ProjectManpowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManpowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectManpowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
