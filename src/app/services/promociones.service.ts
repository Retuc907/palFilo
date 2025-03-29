import { Injectable } from '@angular/core';
import { IPromociones } from '../models/promociones.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromocionesService {

private restaurantes: IPromociones[] = [
  {
    id: 1,
    nombreRestautante: "Jac's Burguer",
    duracion: "Del 20 de mayo hasta el 5 de junio",
    descripcion: "¡Celebra el inicio del verano con nuestra increíble promoción! Compra una hamburguesa doble con queso y recibe unas papas fritas crujientes con nuestra salsa secreta completamente gratis. Además, si vienes con un amigo, ambos recibirán un refresco sin costo adicional. No dejes pasar esta oportunidad de disfrutar de los mejores sabores en Jac's Burguer.",
    imagenes: [
      "../../assets/images/jacs-burguer.jpg"
    ]
  },
  {
    id: 2,
    nombreRestautante: "Jac's Burguer",
    duracion: "Del 10 de junio hasta el 25 de junio",
    descripcion: "¡El combo perfecto para compartir! Disfruta de dos hamburguesas clásicas con queso, una porción de aros de cebolla y dos refrescos a un precio especial. Además, si visitas nuestro restaurante los fines de semana, recibirás una porción extra de papas fritas totalmente gratis. ¡Ven a vivir una experiencia única en Jac's Burguer!",
    imagenes: [
      "../../assets/images/jacs-burguer.jpg"
    ]
  },
  {
    id: 3,
    nombreRestautante: "Sabor del Pacífico",
    duracion: "Del 5 de mayo hasta el 20 de mayo",
    descripcion: "¡Sumérgete en los sabores del mar con nuestra promoción especial! Durante estas semanas, disfruta de nuestro exquisito ceviche de camarón con un toque de maracuyá, acompañado de patacones crujientes y una bebida refrescante. Además, si nos visitas en horario de almuerzo, recibirás un postre típico del Pacífico totalmente gratis. ¡No te lo puedes perder!",
    imagenes: [
      "../../assets/images/jacs-burguer.jpg"
    ]
  },
  {
    id: 4,
    nombreRestautante: "Sabor del Pacífico",
    duracion: "Del 1 de junio hasta el 15 de junio",
    descripcion: "¡Vive una experiencia gastronómica única con los mejores sabores del Pacífico! Te ofrecemos un menú especial que incluye una deliciosa cazuela de mariscos, arroz con coco, ensalada fresca y una bebida natural. Y como sorpresa especial, todos los clientes que nos visiten en grupo recibirán un descuento exclusivo en su cuenta final. ¡Te esperamos en Sabor del Pacífico!",
    imagenes: [
      "../../assets/images/jacs-burguer.jpg"
    ]
  }
  ];

  constructor() { }
  getPromociones(): Observable<IPromociones[]> {
    return of(this.restaurantes);
  }
}
