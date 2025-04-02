import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResenasComponent } from './pages/resenas/resenas.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PreferidosComponent } from './pages/preferidos/preferidos.component';
import { CardRestaurantesComponent } from './component/card-restaurantes/card-restaurantes.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {provideAuth, getAuth} from '@angular/fire/auth'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HeaderComponent } from './component/header/header.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { PopupCardRestaurantesComponent } from './component/popup-card-restaurantes/popup-card-restaurantes.component';
import { ComentarioComponent } from './component/comentario/comentario.component';
import { CardPromocionesComponent } from './component/card-promociones/card-promociones.component';
import { ChatBotComponent } from './component/chat-bot/chat-bot.component';
import { MapaComponent } from './component/mapa/mapa.component';
import { MapaRestaurantesComponent } from './pages/mapa-restaurantes/mapa-restaurantes.component';
import { WebScrapingPageComponent } from './pages/web-scraping-page/web-scraping-page.component';
import { SpinnerLoaderComponent } from './component/spinner-loader/spinner-loader.component';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ResenasComponent,
    InicioComponent,
    PreferidosComponent,
    CardRestaurantesComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    PromocionesComponent,
    BusquedaComponent,
    PopupCardRestaurantesComponent,
    ComentarioComponent,
    CardPromocionesComponent,
    ChatBotComponent,
    MapaComponent,
    MapaRestaurantesComponent,
    WebScrapingPageComponent,
    SpinnerLoaderComponent

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    provideFirebaseApp (() => initializeApp(environment.firebaseConfig)),
    provideAuth (() => getAuth()),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
