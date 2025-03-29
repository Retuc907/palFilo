import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IComentario } from '../models/comentarios.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {
 /**  private apiUrl = 'https://tu-api.com/comentarios'; // Reemplaza con la URL real del backend

  constructor(private http: HttpClient) {}

  getComentarios(): Observable<IComentario[]> {
    return this.http.get<IComentario[]>(this.apiUrl);
  }**/



    private comentarios: IComentario[] = [
      
        {
          "id": 1,
          "nombreRestaurante": "Sabor del Pacífico",
          "nombreUsuario": "user01",
          "resena": "Excelente comida y atención. Definitivamente volveré."
        },
        {
          "id": 2,
          "nombreRestaurante": "Pal Filo",
          "nombreUsuario": "user02",
          "resena": "Las mejores hamburguesas de la ciudad, muy recomendadas."
        },
        {
          "id": 3,
          "nombreRestaurante": "Coma Pan",
          "nombreUsuario": "user03",
          "resena": "Un lugar acogedor con pan recién horneado."
        },
        {
          "id": 4,
          "nombreRestaurante": "Mariscos del Puerto",
          "nombreUsuario": "user04",
          "resena": "Los mariscos estaban frescos y bien preparados. Volveré pronto."
        },
        {
          "id": 5,
          "nombreRestaurante": "La Parrilla Gaucha",
          "nombreUsuario": "user05",
          "resena": "Excelentes cortes de carne y ambiente familiar. Muy recomendado."
        },
        {
          "id": 6,
          "nombreRestaurante": "Rinconcito Mexicano",
          "nombreUsuario": "user06",
          "resena": "Los tacos al pastor estaban increíbles, con una salsa deliciosa."
        },
        {
          "id": 7,
          "nombreRestaurante": "Sushi Express",
          "nombreUsuario": "user07",
          "resena": "Buena relación calidad-precio. El sushi estuvo fresco y delicioso."
        }
      
    ];
  
    constructor() {}
  
    getComentarios(): Observable<IComentario[]> {
      return of(this.comentarios); // Simula la respuesta del backend
    }
  }

