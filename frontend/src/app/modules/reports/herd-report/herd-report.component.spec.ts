import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerdReportComponent } from './herd-report.component';

describe('HerdReportComponent', () => {
  let component: HerdReportComponent;
  let fixture: ComponentFixture<HerdReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HerdReportComponent]
    });
    fixture = TestBed.createComponent(HerdReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
