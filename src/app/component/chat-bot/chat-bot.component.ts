import { Component, OnInit } from '@angular/core';
import { ListaRestaurantesService } from 'src/app/services/lista.restaurantes.service';
import { ChatbotService } from 'src/app/services/chatbot.service';
import { IListaRestaurantes } from 'src/app/models/lista-restaurantes.model';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {
  restaurantes: IListaRestaurantes[] = []; // Lista de restaurantes
  selectedRestaurantId: IListaRestaurantes["id"] | null = null;
  preguntaUsuario: string = ''; // Pregunta del usuario
  respuesta: string = ''; // Respuesta del chatbot

  constructor(
    private listaRestaurantesService: ListaRestaurantesService,
    private chatbotService: ChatbotService
  ) {}

  ngOnInit(): void {
    this.listaRestaurantesService.getRestaurantes().subscribe(data => {
      this.restaurantes = data;
    });
  }

  enviarPregunta(): void {
    if (!this.selectedRestaurantId || !this.preguntaUsuario.trim()) {
      this.respuesta = "Por favor selecciona un restaurante y escribe una pregunta.";
      return;
    }

    console.log("Datos enviados al chatbot:", {
      pregunta: this.preguntaUsuario,
      restaurant_id: this.selectedRestaurantId
    });

    

    this.chatbotService.buscarRespuesta(this.preguntaUsuario, this.selectedRestaurantId!)
      .subscribe(
        respuesta => {
          this.respuesta = respuesta; // Mostrar la respuesta del chatbot
        },
        error => {
          this.respuesta = "Hubo un error al obtener la respuesta del chatbot.";
        }
      );

    this.preguntaUsuario = ''; // Limpiar el input después de enviar la pregunta
  }
}
