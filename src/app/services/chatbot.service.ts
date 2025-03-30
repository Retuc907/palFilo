import { Injectable } from '@angular/core';
import { ListaRestaurantesService } from './lista.restaurantes.service';
import { IListaRestaurantes } from '../models/lista-restaurantes.model';
import { Observable, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private preguntas = [
    {
      restaurant_id: 1,
      pregunta: "¿Dónde está ubicado el restaurante?",
      esperado: "ubicacion",
    },
    {
      restaurant_id: 2,
      pregunta: "¿Cuál es el horario del restaurante?",
      esperado: "horario.lunesViernes",
    }
  ];

  constructor(private listaRestaurantesService: ListaRestaurantesService) {}

  buscarRespuesta(preguntaUsuario: string): Observable<string> {
    const pregunta = this.preguntas.find(p => p.pregunta.toLowerCase() === preguntaUsuario.toLowerCase());

    if (!pregunta) {
      return of("Lo siento, no tengo información sobre eso.");
    }

    return this.listaRestaurantesService.getRestaurantes().pipe(
      map((restaurantes: IListaRestaurantes[]) => {
        const restaurante = restaurantes.find(rest => rest.id === pregunta.restaurant_id);
        if (!restaurante) {
          return "Información no disponible.";
        }

        // Obtener el valor del campo esperado de forma dinámica
        const esperadoValue = this.obtenerValorDinamico(restaurante, pregunta.esperado);

        return esperadoValue ? esperadoValue : "Información no disponible.";
      })
    );
  }

  private obtenerValorDinamico(obj: any, path: string): any {
    return path.split('.').reduce((acc, key) => acc && acc[key], obj);
  }
}
