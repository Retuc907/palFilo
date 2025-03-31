import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaRestaurantesComponent } from './mapa-restaurantes.component';

describe('MapaRestaurantesComponent', () => {
  let component: MapaRestaurantesComponent;
  let fixture: ComponentFixture<MapaRestaurantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapaRestaurantesComponent]
    });
    fixture = TestBed.createComponent(MapaRestaurantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
