import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedingReportComponent } from './breeding-report.component';

describe('BreedingReportComponent', () => {
  let component: BreedingReportComponent;
  let fixture: ComponentFixture<BreedingReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreedingReportComponent]
    });
    fixture = TestBed.createComponent(BreedingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
