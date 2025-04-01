import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IChatbot } from '../models/chatbot.model';
import { environment } from 'src/environments/environment';
import { IListaRestaurantes } from '../models/lista-restaurantes.model';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  private apiUrl = `${environment.apiChatbot}`; // Ruta del endpoint

  constructor(private http: HttpClient) {}

  buscarRespuesta(pregunta: string, restaurantId: number): Observable<string> {
    const requestBody: IChatbot = {
      pregunta: pregunta,
      restaurant_id: restaurantId
    };

    return this.http.post<{ respuesta: string }>(this.apiUrl, requestBody).pipe(
      map(response => response.respuesta) // Extrae solo el string de la respuesta
    );
  }
}