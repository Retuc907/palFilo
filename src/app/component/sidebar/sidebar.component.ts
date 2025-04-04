import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


   

  selectedLanguage = 'es'; // Idioma por defecto
  languages = [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' }
  ];

  constructor(private translate: TranslateService,
    private _userService: UserService,
    private _router: Router
  ) {
    this.translate.setDefaultLang(this.selectedLanguage);
    this.translate.use(this.selectedLanguage);
  
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
  
  
  }

