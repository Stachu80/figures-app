import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureSelectionContainerComponent } from './figure-selection-container.component';
import { Store, StoreModule } from '@ngrx/store';

describe('FigureSelectionContainerComponent', () => {
  let component: FigureSelectionContainerComponent;
  let fixture: ComponentFixture<FigureSelectionContainerComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ FigureSelectionContainerComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FigureSelectionContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
