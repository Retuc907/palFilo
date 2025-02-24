import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private selectedLanguageSubject = new BehaviorSubject<string>('es');
  selectedLanguage$ = this.selectedLanguageSubject.asObservable(); 

 
  selectedLanguage = 'es'; // Idioma por defecto
  languages = [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' }
  ];
 constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem('language') || 'es';
    this.selectedLanguageSubject.next(savedLanguage);
    this.translate.setDefaultLang(savedLanguage);
    this.translate.use(savedLanguage);
  }

  changeLanguage(lang: string) {
    this.selectedLanguageSubject.next(lang);
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }
}