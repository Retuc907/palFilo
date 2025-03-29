import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/services/user.service';
import { ComentariosService } from 'src/app/services/comentarios.service';
import { IComentario } from 'src/app/models/comentarios.model';

@Component({
  selector: 'app-resenas',
  templateUrl: './resenas.component.html',
  styleUrls: ['./resenas.component.css']
})
export class ResenasComponent implements OnInit {
  promociones: IComentario[] = [];

  constructor(
    private comentarioService: ComentariosService,
    private translate: TranslateService,
    private _userService: UserService,
    private _router: Router
  ) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  ngOnInit(): void {
    this.obtenerComentarios();
  }

  obtenerComentarios(): void {
    this.comentarioService.getComentarios().subscribe((comentarios) => {
      this.promociones = comentarios;
    });
  }

  onSeleccionarRestaurante() {
    console.log('Restaurante seleccionado');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  logout() {
    this._userService.logout()
      .then(response => {
        console.log(response);
        this._router.navigate(['/app-login']);
      })
      .catch(error => console.log(error));
  }
}
