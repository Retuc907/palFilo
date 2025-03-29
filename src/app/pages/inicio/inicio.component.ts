import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IListaRestaurantes } from 'src/app/models/lista-restaurantes.model';
import { ListaRestaurantesService } from 'src/app/services/lista.restaurantes.service';
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

   restaurantes: IListaRestaurantes[] = [];
   restauranteSeleccionado: IListaRestaurantes | null = null; // Restaurante seleccionado

   
  constructor(
    private translate: TranslateService,
    private _userService: UserService,
    private _router: Router,
    private restauranteService: ListaRestaurantesService
    
  ) 
  
  
  
  {
    this.translate.setDefaultLang(this.selectedLanguage);
    this.translate.use(this.selectedLanguage);
  
  }

  abrirPopupRestaurante(restaurante: IListaRestaurantes) {
    console.log("Restaurante seleccionado:", restaurante);
    this.restauranteSeleccionado = restaurante; // Guardamos el restaurante seleccionado
  }

  cerrarPopup() {
    this.restauranteSeleccionado = null;
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


  ngOnInit(): void {
    this.restauranteService.getRestaurantes().subscribe(data => {
      this.restaurantes = data;
    });
  }




  seleccionarRestaurante(restaurante: any) {
    this.restauranteSeleccionado = restaurante;
  }



 
}


