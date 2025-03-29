import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IListaRestaurantes } from 'src/app/models/lista-restaurantes.model';
import { LikesService } from 'src/app/services/likes.service';
import { ListaRestaurantesService } from 'src/app/services/lista.restaurantes.service';

@Component({
  selector: 'app-popup-card-restaurantes',
  templateUrl: './popup-card-restaurantes.component.html',
  styleUrls: ['./popup-card-restaurantes.component.css']
})
export class PopupCardRestaurantesComponent implements OnInit {
  @Input() restaurante!: IListaRestaurantes;
  @Output() cerrar = new EventEmitter<void>();
  @Input() imagenes: string[] = [];

  likes: number = 0; 


  restaurantes: IListaRestaurantes[] = [];

  constructor(
    private restauranteService: ListaRestaurantesService,
  ) {}

  ngOnInit(): void {
    this.restauranteService.getRestaurantes().subscribe(data => {
      this.restaurantes = data;
    });

  }

  cerrarPopup() {
    this.cerrar.emit();
  }




}
