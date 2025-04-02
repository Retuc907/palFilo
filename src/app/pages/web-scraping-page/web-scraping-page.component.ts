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
  selectedRestaurantUrl: string | null = null;
  scrapingData: ScrapingResponse | null = null;

  constructor(
    private scrapingService: WebScrappingService,
    private listaRestaurantesService: ListaRestaurantesService
  ) {}

  ngOnInit(): void {
    // Obtener lista de restaurantes
    this.listaRestaurantesService.getRestaurantesCercanos().subscribe((data) => {
      this.restaurantes = data;
      console.log('Lista de restaurantes obtenida:', data);
    });
  }

  onRestaurantSelect(event: Event) {
    const selectedMenuUrl = (event.target as HTMLSelectElement).value;
    
    if (selectedMenuUrl) {
      this.selectedRestaurantUrl = selectedMenuUrl;
      this.obtenerDatosScraping(selectedMenuUrl);
    }
  }

  obtenerDatosScraping(menuUrl: string) {
    this.scrapingService.getRestaurantData(menuUrl).subscribe((data) => {
      this.scrapingData = data;
      console.log('Datos del scraping:', data);
    });
  }
}
