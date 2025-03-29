import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IListaRestaurantes } from 'src/app/models/lista-restaurantes.model';
import { ListaRestaurantesService } from 'src/app/services/lista.restaurantes.service';

@Component({
  selector: 'app-card-restaurantes',
  templateUrl: './card-restaurantes.component.html',
  styleUrls: ['./card-restaurantes.component.css']
})
export class CardRestaurantesComponent {

  @Input() id!: number;
  @Input() nombre!: string;
  @Input() categoria!: string;
  @Input() calificacion!: number;
  @Input() imagenes!: string[];
  @Input() mediosPago!: string;
  @Input() rangoPrecios!: { desde: number; hasta: number };
  @Input() ubicacion!: string;
  @Input() horario!: { lunesViernes: string; domingoFestivos: string };
  @Input() menu!: string;
  
  @Output() seleccionRestaurante = new EventEmitter<IListaRestaurantes>();

  


  
  restaurantes: IListaRestaurantes[] = [];

  constructor(private restauranteService: ListaRestaurantesService) {}
  
    ngOnInit(): void {
      this.restauranteService.getRestaurantes().subscribe(data => {
        this.restaurantes = data;
      });
    }
 

    abrirPopup() {
      const restauranteSeleccionado: IListaRestaurantes = {
        id: this.id, // Asegúrate de tener esta propiedad en el componente
        nombre: this.nombre,
        categoria: this.categoria,
        calificacion: this.calificacion,
        imagenes: this.imagenes,
        mediosPago: this.mediosPago || "No disponible",
        rangoPrecios: this.rangoPrecios || { desde: 0, hasta: 0 },
        ubicacion: this.ubicacion || "Ubicación no disponible",
        horario: this.horario || { lunesViernes: "No disponible", domingoFestivos: "No disponible" },
        menu: this.menu || "#"
      };
      
      this.seleccionRestaurante.emit(restauranteSeleccionado);
    }

}
