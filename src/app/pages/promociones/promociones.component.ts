import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent {
   promociones = [
    {
      nombre: 'Pal Filo',
      duracion: '2 semanas',
      ubicacion: 'Centro Comercial XYZ',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..',
      imagen: '../../../assets/images/jacs-burguer.jpg'
    },
    {
      nombre: 'Sabores Andinos',
      duracion: '1 mes',
      ubicacion: 'Av. Principal 123',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imagen: '../../../assets/images/jacs-burguer.jpg'
    },
    {
      nombre: 'Pal Filo',
      duracion: '2 semanas',
      ubicacion: 'Centro Comercial XYZ',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imagen: '../../../assets/images/jacs-burguer.jpg'
    },
    {
      nombre: 'Sabores Andinos',
      duracion: '1 mes',
      ubicacion: 'Av. Principal 123',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imagen: '../../../assets/images/jacs-burguer.jpg'
    }
  ];

  onSeleccionarRestaurante() {
    console.log('Restaurante seleccionado');
  }

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
