import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IListaRestaurantes } from '../models/lista-restaurantes.model';
// import { HttpClient } from '@angular/common/http';  // Descomentar cuando tengas la API

@Injectable({
  providedIn: 'root'
})
export class LikesService {
  // private apiUrl = 'https://tu-api.com/likes';  // Descomentar cuando tengas la API

  private likes: { [id: number]: number } = {}; // Simulación en memoria
  private favoritos: IListaRestaurantes[] = [];

  constructor(/* private http: HttpClient */) {}

  darLike(restaurante: IListaRestaurantes): Observable<number> {
    if (restaurante.restaurant_id === undefined) {
      console.error('Error: El restaurante no tiene un ID válido', restaurante);
      return of(0);
    }
    const id = restaurante.restaurant_id;

    // Incrementa los likes
    if (!this.likes[id]) {
      this.likes[id] = 0;
    }
    this.likes[id]++;

    // Si aún no está en favoritos, lo agregamos
    if (!this.favoritos.find(r => r.restaurant_id === id)) {
      // Crear una copia con todas las propiedades, incluido el ID
      const restauranteCopia = { ...restaurante };
      this.favoritos.push(restauranteCopia);
      console.log('Añadido a favoritos:', restauranteCopia);
    }

    return of(this.likes[id]);
  }

  obtenerLikes(id: number): Observable<number> {
    return of(this.likes[id] || 0);
  }

  obtenerFavoritos(): Observable<IListaRestaurantes[]> {
    return of(this.favoritos);
  }
}

  /*
  // Método real cuando tengas la API
  darLike(idPromocion: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${idPromocion}`, {}); 
  }

  obtenerLikes(idPromocion: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/${idPromocion}`);
  }
  */
