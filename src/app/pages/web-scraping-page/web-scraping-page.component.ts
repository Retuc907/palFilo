import { Component, OnInit } from '@angular/core';
import { ScrapingResponse } from 'src/app/models/web.scraping.model';
import { WebScrappingService } from 'src/app/services/web-scrapping.service';
import { ListaRestaurantesService } from 'src/app/services/lista.restaurantes.service';
import { IListaRestaurantes } from 'src/app/models/lista-restaurantes.model';

@Component({
  selector: 'app-web-scraping-page',
  templateUrl: './web-scraping-page.component.html',
  styleUrls: ['./web-scraping-page.component.css']
})
export class WebScrapingPageComponent implements OnInit {
  restaurantes: IListaRestaurantes[] = [];
  selectedRestaurantUrl: string = ''; // Inicializar como cadena vacía
  scrapingData: ScrapingResponse | null = null;
  cargando: boolean = false; // Indicador de carga

  constructor(
    private scrapingService: WebScrappingService,
    private listaRestaurantesService: ListaRestaurantesService
  ) {}

  ngOnInit(): void {
    this.obtenerListaRestaurantes();
  }

  obtenerListaRestaurantes(): void {
    this.cargando = true; // Activar el spinner
    this.listaRestaurantesService.getRestaurantesCercanos().subscribe({
      next: (data) => {
        this.restaurantes = data;
        console.log('✅ Lista de restaurantes obtenida:', data);
        this.cargando = false; // Desactivar el spinner
      },
      error: (err) => {
        console.error('❌ Error obteniendo restaurantes:', err);
        this.cargando = false; // Desactivar el spinner en caso de error
      }
    });
  }

  onRestaurantSelect(event: Event): void {
    const selectedMenuUrl = (event.target as HTMLSelectElement).value;
    
    if (selectedMenuUrl) {
      this.selectedRestaurantUrl = selectedMenuUrl;
      this.obtenerDatosScraping(selectedMenuUrl);
    }
  }

  obtenerDatosScraping(menuUrl: string): void {
    this.cargando = true; // Activar el spinner antes de la petición

    this.scrapingService.getRestaurantData(menuUrl).subscribe({
      next: (data) => {
        this.scrapingData = data;
        console.log('✅ Datos del scraping:', data);
        this.cargando = false; // Desactivar el spinner después de recibir la respuesta
      },
      error: (err) => {
        console.error('❌ Error obteniendo datos del scraping:', err);
        this.scrapingData = null;
        this.cargando = false; // Desactivar el spinner en caso de error
      }
    });
  }
}
