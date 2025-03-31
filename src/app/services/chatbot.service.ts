import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IChatbot } from '../models/chatbot.model';
import { environment } from 'src/environments/environment';

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

    return this.http.post<string>(this.apiUrl, requestBody); // Hacer la petición POST
  }
}
