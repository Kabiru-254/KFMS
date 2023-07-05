import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkProductionComponent } from './milk-production.component';

describe('MilkProductionComponent', () => {
  let component: MilkProductionComponent;
  let fixture: ComponentFixture<MilkProductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MilkProductionComponent]
    });
    fixture = TestBed.createComponent(MilkProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
