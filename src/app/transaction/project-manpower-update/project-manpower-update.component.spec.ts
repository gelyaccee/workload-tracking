import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManpowerUpdateComponent } from './project-manpower-update.component';

describe('ProjectManpowerUpdateComponent', () => {
  let component: ProjectManpowerUpdateComponent;
  let fixture: ComponentFixture<ProjectManpowerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManpowerUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectManpowerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
