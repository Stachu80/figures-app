import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationsFormComponent } from './calculations-form.component';

describe('CalculationsFormComponent', () => {
  let component: CalculationsFormComponent;
  let fixture: ComponentFixture<CalculationsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculationsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
