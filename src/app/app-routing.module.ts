import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { PreferidosComponent } from './pages/preferidos/preferidos.component';
import { ResenasComponent } from './pages/resenas/resenas.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { canActivate,redirectUnauthorizedTo} from '@angular/fire/auth-guard';



const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'app-inicio',component:InicioComponent, ...canActivate(()=> redirectUnauthorizedTo(['/app-register']))},
  {path: 'app-login',component:LoginComponent},
  {path: 'app-preferidos',component:PreferidosComponent},
  {path: 'app-resenas',component:ResenasComponent},
  {path: 'app-register', component:RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


  
}
