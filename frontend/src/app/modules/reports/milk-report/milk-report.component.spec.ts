import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkReportComponent } from './milk-report.component';

describe('MilkReportComponent', () => {
  let component: MilkReportComponent;
  let fixture: ComponentFixture<MilkReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MilkReportComponent]
    });
    fixture = TestBed.createComponent(MilkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
