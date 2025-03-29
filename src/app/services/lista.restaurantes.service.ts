import { Injectable } from '@angular/core';
import { IListaRestaurantes } from '../models/lista-restaurantes.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaRestaurantesService {

  private restaurantes: IListaRestaurantes[] = [
    {
      id: 1,
      nombre: "Jac's Burguer",
      categoria: "Comida rápida",
      calificacion: 4.8,
      imagenes: [
        "../../assets/images/jacs-burguer.jpg",
        "../../assets/images/jacs-burguer.jpg",
        "../../assets/images/jacs-burguer.jpg"
      ],
      mediosPago: "Efectivo, Nequi, Daviplata, transferencias",
      rangoPrecios: { desde: 10000, hasta: 60000 },
      ubicacion: "AV.3C #60d 34",
      horario: { lunesViernes: "11:00-21:00", domingoFestivos: "11:00-21:00" },
      menu: "Enlace al menú"
    },
    {
      id: 2,
      nombre: "Sabor del Pacífico",
      categoria: "Mariscos",
      calificacion: 4.7,
      imagenes: [
        "../../assets/images/jacs-burguer.jpg",
        "../../assets/images/jacs-burguer.jpg",
        "../../assets/images/jacs-burguer.jpg"
      ],
      mediosPago: "Tarjetas, efectivo",
      rangoPrecios: { desde: 15000, hasta: 80000 },
      ubicacion: "Calle 45 #12-34",
      horario: { lunesViernes: "10:00-22:00", domingoFestivos: "10:00-22:30" },
      menu: "Enlace al menú"
    }
  ];

  constructor() { }
  getRestaurantes(): Observable<IListaRestaurantes[]> {
    return of(this.restaurantes);
  }
}
