import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ScrapingResponse } from '../models/web.scraping.model';

@Injectable({
  providedIn: 'root'
})
export class WebScrappingService {

    private apiUrl = `https://palfilo-chatbot.onrender.com/scraping/api/restaurant/url/`; // Ruta del endpoint
  

  constructor(
    private http: HttpClient
  ) { }
  
  getRestaurantData(url: string): Observable<ScrapingResponse> {
    
    return this.http.get<ScrapingResponse>(`${this.apiUrl}${url}`);
  }
  getRestaurantUrl(): Observable<string> {
    return this.http.get<string>(this.apiUrl);
  }
  
}