import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { IListaRestaurantes, Location } from 'src/app/models/lista-restaurantes.model';
import { LikesService } from 'src/app/services/likes.service';
import { ListaRestaurantesService } from 'src/app/services/lista.restaurantes.service';

@Component({
  selector: 'app-card-restaurantes',
  templateUrl: './card-restaurantes.component.html',
  styleUrls: ['./card-restaurantes.component.css']
})
export class CardRestaurantesComponent implements OnInit {

  // Propiedades de compatibilidad para inputs anteriores
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

  @Input() restaurante!: IListaRestaurantes;
  
  @Output() seleccionRestaurante = new EventEmitter<IListaRestaurantes>();

  likes: number = 0; 

  restaurantes: IListaRestaurantes[] = [];

  constructor(
    private restaurantesService: ListaRestaurantesService,
    private likesService: LikesService
  ) {}
  
  ngOnInit(): void {
    // Inicialización para compatibilidad con la versión anterior
    if (!this.restaurante && this.id) {
      // Crear un objeto compatible con el nuevo modelo IListaRestaurantes
      this.restaurante = {
        restaurant_id: this.id,
        name: this.nombre || '',
        address: this.ubicacion || 'Ubicación no disponible',
        location: this.obtenerLocationDesdeUbicacion(),
        category: this.categoria || '',
        opening_hours: this.convertirHorarioAntiguo(),
        menu_url: this.menu || '#',
        created_at: new Date(),
        updated_at: new Date()
      };
    }

    // Cargar restaurantes cercanos usando el nuevo servicio
    this.restaurantesService.getRestaurantesCercanos().subscribe(data => {
      this.restaurantes = data;
    });
      
    // Mantener funcionalidad de likes (asumiendo que funciona con el id)
    if (this.restaurante && this.restaurante.restaurant_id) {
      this.likesService.obtenerLikes(this.restaurante.restaurant_id).subscribe((likes) => {
        this.likes = likes;
      });
    } else if (this.id) {
      this.likesService.obtenerLikes(this.id).subscribe((likes) => {
        this.likes = likes;
      });
    }
  }

  // Función auxiliar para convertir ubicación a Location
  private obtenerLocationDesdeUbicacion(): Location {
    // Por defecto, retornamos coordenadas vacías
    // En una implementación real, podrías usar geocoding para convertir direcciones en coordenadas
    return {
      latitude: 0,
      longitude: 0
    };
  }

  // Función auxiliar para convertir el formato antiguo de horario al nuevo
  private convertirHorarioAntiguo(): any {
    if (this.horario) {
      return {
        weekdays: this.horario.lunesViernes,
        weekends: this.horario.domingoFestivos
      };
    }
    return null;
  }

  abrirPopup() {
    if (this.restaurante) {
      this.seleccionRestaurante.emit(this.restaurante);
    } else {
      // Crear un objeto compatible con el nuevo modelo para emitir
      const restauranteSeleccionado: IListaRestaurantes = {
        restaurant_id: this.id,
        name: this.nombre || '',
        address: this.ubicacion || 'Ubicación no disponible',
        location: this.obtenerLocationDesdeUbicacion(),
        category: this.categoria || '',
        opening_hours: this.convertirHorarioAntiguo(),
        menu_url: this.menu || '#',
        created_at: new Date(),
        updated_at: new Date()
      };
      
      this.seleccionRestaurante.emit(restauranteSeleccionado);
    }
  }

  darLike(event: Event) {
    event.stopPropagation(); // Evita que el evento se propague y abra el popup
    
    if (!this.restaurante) {
      console.error("Error: restaurante no está definido");
      return;
    }
    
    // Asumiendo que el servicio de likes espera el nuevo formato de restaurante
    // o que puede trabajar con restaurant_id en lugar de id
    this.likesService.darLike(this.restaurante).subscribe((nuevosLikes) => {
      this.likes = nuevosLikes;
    });
  }
}