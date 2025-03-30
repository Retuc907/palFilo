
import { Component } from '@angular/core';
import { ChatbotService } from 'src/app/services/chatbot.service';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent {
  preguntaUsuario: string = "";
  respuesta: string = "";

  constructor(private chatbotService: ChatbotService) {}

  enviarPregunta() {
    this.chatbotService.buscarRespuesta(this.preguntaUsuario).subscribe(res => {
      this.respuesta = res;
    });

    this.preguntaUsuario = "";
  }
}
