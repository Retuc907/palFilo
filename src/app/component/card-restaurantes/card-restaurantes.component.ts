import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-restaurantes',
  templateUrl: './card-restaurantes.component.html',
  styleUrls: ['./card-restaurantes.component.css']
})
export class CardRestaurantesComponent {

  @Input() nombre!: string;
  @Input() categoria!: string;
  @Input() calificacion!: number;
  @Input() imagen!: string;
 
 

}
