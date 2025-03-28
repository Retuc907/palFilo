import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup-card-restaurantes',
  templateUrl: './popup-card-restaurantes.component.html',
  styleUrls: ['./popup-card-restaurantes.component.css']
})
export class PopupCardRestaurantesComponent {

  @Input() restaurante: any;
  @Output() cerrar = new EventEmitter<void>();

  cerrarPopup() {
    this.cerrar.emit();
  }
}