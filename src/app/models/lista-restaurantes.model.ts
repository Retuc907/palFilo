export interface IListaRestaurantes {
 
        id: number;
        nombre: string;
        categoria: string;
        calificacion: number;
        imagenes: string[]; 
        mediosPago: string;
        rangoPrecios: { desde: number; hasta: number };
        ubicacion: string;
        horario: { lunesViernes: string; domingoFestivos: string };
        menu: string; 
      
      
  }
  