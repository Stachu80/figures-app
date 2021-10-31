import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationHeaderComponent } from '@app/calculations/components';

describe('CalculationHeaderComponent', () => {
  let component: CalculationHeaderComponent;
  let fixture: ComponentFixture<CalculationHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculationHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
