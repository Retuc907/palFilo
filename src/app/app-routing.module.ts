import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { ResenasComponent } from './pages/resenas/resenas.component';
import { PreferidosComponent } from './pages/preferidos/preferidos.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { canActivate,redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { HeaderComponent } from './component/header/header.component';
import { PopupCardRestaurantesComponent } from './component/popup-card-restaurantes/popup-card-restaurantes.component';
import { ComentarioComponent } from './component/comentario/comentario.component';





const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'app-inicio',component:InicioComponent, ...canActivate(()=> redirectUnauthorizedTo(['/app-register']))},
  {path: 'app-promociones', component:PromocionesComponent},
  {path: 'app-resenas',component:ResenasComponent},
  {path: 'app-preferidos',component:PreferidosComponent},
  {path: 'app-sidebar',component:SidebarComponent},
  {path: 'app-login',component:LoginComponent},
  {path: 'app-register', component:RegisterComponent },
  {path: 'app-header', component:HeaderComponent},
  {path: 'app-busqueda', component:BusquedaComponent},
  {path: 'app-popup-card-restaurantes',component:PopupCardRestaurantesComponent},
  {path: 'app-comentario',component:ComentarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


  
}
