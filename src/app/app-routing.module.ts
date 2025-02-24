import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { PreferidosComponent } from './pages/preferidos/preferidos.component';
import { ResenasComponent } from './pages/resenas/resenas.component';



const routes: Routes = [
  {path: '',component:InicioComponent},
  {path: 'app-inicio',component:InicioComponent},
  {path: 'app-login',component:LoginComponent},
  {path: 'app-preferidos',component:PreferidosComponent},
  {path: 'app-resenas',component:ResenasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


  
}
