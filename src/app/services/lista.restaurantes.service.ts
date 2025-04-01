import { Injectable } from '@angular/core';
import { IListaRestaurantes } from '../models/lista-restaurantes.model';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class 
ListaRestaurantesService {

  private apiUrl = environment.apiRestaurantes

  constructor(private http: HttpClient) {}

  getRestaurantesCercanos(): Observable<IListaRestaurantes[]> {
    const userId = 38;
    //const userId = localStorage.getItem('userIdRegister') || '38';
    if (!userId) {
      console.error('No se encontró userId en localStorage');
      return of([]); // Retornar un array vacío como Observable
    }
    
    console.log('userId obtenido de localStorage:', userId);

    // Intenta con un formato diferente de URL o con parámetros en lugar de path parameters
    const url = `${this.apiUrl}/restaurants/near/user_id/${userId}`;
    return this.http.get<IListaRestaurantes[]>(url, {
      params: {
        user_id: userId
      }
    });
  }
}
