export interface ScrapingMatch {
    class: string[] | string;  // Puede ser un array de strings o un string vacío
    id: string;
    tag: string;
    text: string;
  }
  
  export interface ScrapingResponse {
    matches: ScrapingMatch[];
  }
  