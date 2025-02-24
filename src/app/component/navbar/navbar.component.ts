import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


      selectedLanguage = 'es'; // Idioma por defecto
      languages = [
        { code: 'es', label: 'Español' },
        { code: 'en', label: 'English' },
        { code: 'fr', label: 'Français' },
        { code: 'de', label: 'Deutsch' }
      ];
    
      constructor(private translate: TranslateService) {
        const savedLanguage = localStorage.getItem('language');
        this.selectedLanguage = savedLanguage ? savedLanguage : 'es';
        
        this.translate.setDefaultLang(this.selectedLanguage);
        this.translate.use(this.selectedLanguage);
      }
    
      changeLanguage(lang: string) {
        this.selectedLanguage = lang;
        this.translate.use(lang);
        localStorage.setItem('language', lang);
      }
  

}
