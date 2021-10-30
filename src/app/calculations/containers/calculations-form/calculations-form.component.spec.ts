import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationsFormComponent } from './calculations-form.component';
import { Store, StoreModule } from '@ngrx/store';

describe('CalculationsFormComponent', () => {
  let component: CalculationsFormComponent;
  let fixture: ComponentFixture<CalculationsFormComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ CalculationsFormComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationsFormComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
