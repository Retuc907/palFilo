import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IListaRestaurantes } from 'src/app/models/lista-restaurantes.model';
import { ListaRestaurantesService } from 'src/app/services/lista.restaurantes.service';

@Component({
  selector: 'app-popup-card-restaurantes',
  templateUrl: './popup-card-restaurantes.component.html',
  styleUrls: ['./popup-card-restaurantes.component.css']
})
export class PopupCardRestaurantesComponent implements OnInit {
  @Input() restaurante!: IListaRestaurantes;
  @Output() cerrar = new EventEmitter<void>();
  @Input() imagenes: string[] = [];
  rangoPrecios = { desde: 10, hasta: 30 };
  mediosDePago = 'Credit Card, Cash';
  horaro = { lv: '10:00-6:00', df: 'No service' };
  image = '../../../assets/images/jacs-burguer.jpg'; // Ruta fija a la imagen que quieres mostrar


  likes: number = 0;
  restaurantes: IListaRestaurantes[] = [];


  constructor(private restauranteService: ListaRestaurantesService) {}

  ngOnInit(): void {
    this.restauranteService.getRestaurantesCercanos().subscribe(data => {
      this.restaurantes = data;
    });

    // Asignamos los valores "quemados" según la categoría del restaurante
    this.asignarDatosAdicionales();
  }

  asignarDatosAdicionales() {
    if (this.restaurante) {
      const categoria = this.restaurante.category;

  
    }
  }

  cerrarPopup() {
    this.cerrar.emit();
  }
}
