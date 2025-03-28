import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPromocionesComponent } from './card-promociones.component';

describe('CardPromocionesComponent', () => {
  let component: CardPromocionesComponent;
  let fixture: ComponentFixture<CardPromocionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPromocionesComponent]
    });
    fixture = TestBed.createComponent(CardPromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
