import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-promociones',
  templateUrl: './card-promociones.component.html',
  styleUrls: ['./card-promociones.component.css']
})
export class CardPromocionesComponent {
  @Input() nombre!: string;
  @Input() duracion!: string;
  @Input() calificacion!: number;
  @Input() descripcion!: string;
  @Input() imagen!: string;
 

  

}
