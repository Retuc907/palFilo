import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IComentario } from 'src/app/models/comentarios.model';
import { ComentariosService } from 'src/app/services/comentarios.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent {
  @Input() nombreRestaurante!: string;
  @Input() resena!: string;

 
   
    @Output() seleccionRestaurante = new EventEmitter<void>();
   
    comentarios: IComentario[] = []; // Aquí se almacenarán los comentarios del backend

    constructor(private comentarioService: ComentariosService) {}
  
    ngOnInit(): void {
      this.comentarioService.getComentarios().subscribe(data => {
        this.comentarios = data;
      });
    }
  }