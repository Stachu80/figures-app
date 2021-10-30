import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationsContainerComponent } from './calculations-container.component';
import { Store, StoreModule } from '@ngrx/store';

describe('CalculationsContainerComponent', () => {
  let component: CalculationsContainerComponent;
  let fixture: ComponentFixture<CalculationsContainerComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ CalculationsContainerComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationsContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
