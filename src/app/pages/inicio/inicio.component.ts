import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/services/user.service';


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


  
  restaurantes = [
    { nombre: 'Jac’s Burguer', categoria: 'Comida rápida', calificacion: 4.8, imagen: '../../../assets/images/jacs-burguer.jpg' },
    { nombre: 'Pizza House', categoria: 'Italiana', calificacion: 4.5, imagen: '../../../assets/images/palFilo-logo.png' },
    { nombre: 'Jac’s Burguer', categoria: 'Comida rápida', calificacion: 4.8, imagen: '../../../assets/images/jacs-burguer.jpg' },
    { nombre: 'Pizza House', categoria: 'Italiana', calificacion: 4.5, imagen: '../../../assets/images/palFilo-logo.png' },
    { nombre: 'Jac’s Burguer', categoria: 'Comida rápida', calificacion: 4.8, imagen: '../../../assets/images/jacs-burguer.jpg' },
    { nombre: 'Pizza House', categoria: 'Italiana', calificacion: 4.5, imagen: '../../../assets/images/palFilo-logo.png' }

  ];

  restauranteSeleccionado: any = null;

  seleccionarRestaurante(restaurante: any) {
    this.restauranteSeleccionado = restaurante;
  }

  cerrarPopup() {
    this.restauranteSeleccionado = null;
  }
}


