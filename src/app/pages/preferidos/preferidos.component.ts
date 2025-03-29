import { Component, OnInit } from '@angular/core';
import { IListaRestaurantes } from 'src/app/models/lista-restaurantes.model';
import { LikesService } from 'src/app/services/likes.service';


@Component({
  selector: 'app-preferidos',
  templateUrl: './preferidos.component.html',
  styleUrls: ['./preferidos.component.css']
})
export class PreferidosComponent  implements OnInit {
  favoritos: IListaRestaurantes[] = [];

  constructor(private likesService: LikesService) {}

  ngOnInit(): void {
    this.likesService.obtenerFavoritos().subscribe((data) => {
      console.log("Favoritos recibidos:", data); // 🔍 Verifica los datos

      this.favoritos = data;
    });
  }
}