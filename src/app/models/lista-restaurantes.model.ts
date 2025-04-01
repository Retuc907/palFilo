export interface IListaRestaurantes {
 
      restaurant_id: number;
      name: string;
      address: string;
      location: Location;
      category: string;
      opening_hours: any; // Si 'opening_hours' puede ser nulo o tener algún tipo de estructura, lo dejaremos como 'any'.
      menu_url: string;
      created_at: Date;
      updated_at: Date;
      rangoPrecios?: { desde: number; hasta: number };  // Agregamos esta propiedad

    }
    
    export interface Location {
      latitude: number;
      longitude: number;
      
  }
  