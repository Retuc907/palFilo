import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCardRestaurantesComponent } from './popup-card-restaurantes.component';

describe('PopupCardRestaurantesComponent', () => {
  let component: PopupCardRestaurantesComponent;
  let fixture: ComponentFixture<PopupCardRestaurantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupCardRestaurantesComponent]
    });
    fixture = TestBed.createComponent(PopupCardRestaurantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
