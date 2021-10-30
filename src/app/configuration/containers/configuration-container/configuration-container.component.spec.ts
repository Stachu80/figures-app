import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationContainerComponent } from './configuration-container.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ConfigurationContainerComponent', () => {
  let component: ConfigurationContainerComponent;
  let fixture: ComponentFixture<ConfigurationContainerComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ConfigurationContainerComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
