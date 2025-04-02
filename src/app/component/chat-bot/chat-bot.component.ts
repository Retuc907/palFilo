import { Component, OnInit } from '@angular/core';
import { ChatbotService } from 'src/app/services/chatbot.service';
import { ListaRestaurantesService } from 'src/app/services/lista.restaurantes.service';
import { IListaRestaurantes } from 'src/app/models/lista-restaurantes.model';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {
  pregunta: string = ''; // Pregunta del usuario
  respuesta: string = ''; // Respuesta del chatbot
  restaurantId: number | null = null; // ID del restaurante seleccionado
  restaurantes: IListaRestaurantes[] = []; // Lista de restaurantes

  constructor(
    private chatbotService: ChatbotService,
    private listaRestaurantesService: ListaRestaurantesService
  ) {}

  ngOnInit(): void {
    this.obtenerRestaurantes();
  }

  obtenerRestaurantes(): void {
    this.listaRestaurantesService.getRestaurantesCercanos().subscribe({
      next: (data) => {
        console.log('✅ Restaurantes recibidos:', data); // Verificar si llegan los datos
        this.restaurantes = data;
        if (this.restaurantes.length > 0) {
          this.restaurantId = this.restaurantes[0].restaurant_id; // Seleccionar el primer restaurante por defecto
        }
      },
      error: (err) => console.error('❌ Error obteniendo restaurantes:', err)
    });
  }

  enviarPregunta(): void {
    if (!this.pregunta.trim() || this.restaurantId === null) return; // Evita preguntas vacías o sin restaurante seleccionado

    console.log('📩 Enviando pregunta: "${this.pregunta}" al restaurante ID: ${this.restaurantId}');

    this.chatbotService.buscarRespuesta(this.pregunta, this.restaurantId).subscribe({
      next: (resp) => {
        console.log('✅ Respuesta del chatbot:', resp);
        this.respuesta = resp; // Guardamos la respuesta
      },
      error: (err) => {
        console.error('❌ Error obteniendo respuesta del chatbot:', err);
        this.respuesta = 'Hubo un error al procesar tu pregunta.';
      }
    });
  }
}