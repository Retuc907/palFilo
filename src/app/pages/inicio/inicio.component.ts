import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/services/translate.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  selectedLanguage: string = 'es';
  languages = this.translationService.languages;

  constructor(private translationService: TranslationService) {
    this.translationService.selectedLanguage$.subscribe(lang => {
      this.selectedLanguage = lang;
    });
  }

  changeLanguage(lang: string) {
    this.translationService.changeLanguage(lang);
  }
}