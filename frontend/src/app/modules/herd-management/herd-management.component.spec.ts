import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerdManagementComponent } from './herd-management.component';

describe('HerdManagementComponent', () => {
  let component: HerdManagementComponent;
  let fixture: ComponentFixture<HerdManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HerdManagementComponent]
    });
    fixture = TestBed.createComponent(HerdManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
