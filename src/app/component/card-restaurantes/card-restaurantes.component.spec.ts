import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRestaurantesComponent } from './card-restaurantes.component';

describe('CardRestaurantesComponent', () => {
  let component: CardRestaurantesComponent;
  let fixture: ComponentFixture<CardRestaurantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardRestaurantesComponent]
    });
    fixture = TestBed.createComponent(CardRestaurantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
