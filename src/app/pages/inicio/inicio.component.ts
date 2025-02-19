import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

    selectedLanguage = 'es'; // Idioma por defecto
    languages = [
      { code: 'es', label: 'Español' },
      { code: 'en', label: 'English' },
      { code: 'fr', label: 'Français' },
      { code: 'de', label: 'Deutsch' }
    ];
  
    constructor(private translate: TranslateService) {
      this.translate.setDefaultLang(this.selectedLanguage);
      this.translate.use(this.selectedLanguage);
    }
  
    changeLanguage(lang: string) {
      this.selectedLanguage = lang;
      this.translate.use(lang);
    }

}
