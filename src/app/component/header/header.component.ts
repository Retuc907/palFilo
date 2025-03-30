import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/services/user.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isDarkMode: boolean;


  
    selectedLanguage = 'es'; // Idioma por defecto
    languages = [
      { code: 'es', label: 'Español' },
      { code: 'en', label: 'English' },
      { code: 'fr', label: 'Français' },
      { code: 'de', label: 'Deutsch' }
    ];
  
    constructor(
      private translate: TranslateService,
      private _userService: UserService,
      private _router: Router,
      private darkModeService: DarkModeService
    ) {
      this.translate.setDefaultLang(this.selectedLanguage);
      this.translate.use(this.selectedLanguage);
      this.isDarkMode = this.darkModeService.isDarkMode();
    
    }
  
    changeLanguage(lang: string) {
      this.selectedLanguage = lang;
      this.translate.use(lang);
    }
    logout() {
      this._userService.logout()
        .then(response => {
          console.log(response);
          this._router.navigate(['/app-login']); // Quité los paréntesis extra
        })
        .catch(error => console.log(error));
    }

    toggleDarkMode(): void {
      this.darkModeService.toggleDarkMode();
      this.isDarkMode = this.darkModeService.isDarkMode();
    }
    
}
