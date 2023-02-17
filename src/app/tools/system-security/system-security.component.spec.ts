import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemSecurityComponent } from './system-security.component';

describe('SystemSecurityComponent', () => {
  let component: SystemSecurityComponent;
  let fixture: ComponentFixture<SystemSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
