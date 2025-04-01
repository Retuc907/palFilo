import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import * as L from 'leaflet';
import { ListaRestaurantesService } from 'src/app/services/lista.restaurantes.service';
import { IListaRestaurantes } from 'src/app/models/lista-restaurantes.model';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit, AfterViewInit, OnDestroy {

  map: L.Map | undefined;
  defaultCoordinates = { latitude: 4.5748, longitude: -74.559 };

  // Almacenamos el control de geolocalización como L.Control
  private geolocateControl?: L.Control;

  constructor(private _listaRestaurantes: ListaRestaurantesService) {}

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    try {
      const mapDiv = document.getElementById('map');
      console.log("¿Existe el div del mapa?", mapDiv);
  
      if (!mapDiv) {
        console.error("❌ ERROR: No se encontró el div con id 'map'. Verifica el HTML.");
        return;
      }
  
      this.map = L.map('map').setView([this.defaultCoordinates.latitude, this.defaultCoordinates.longitude], 9);
      console.log("Mapa inicializado:", this.map instanceof L.Map ? "✅ Correcto" : "❌ Incorrecto", this.map);
  
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map);
  
      // Agregamos los marcadores de restaurantes
      this.addRestaurantMarkers();
  
      // Creamos y añadimos el control de geolocalización
      this.createGeolocateControl();
    } catch (error) {
      console.error("Error al inicializar el mapa:", error);
    }
  }
  

  ngOnDestroy(): void {
    if (this.map) {
      if (this.geolocateControl) {
        try {
          this.map.removeControl(this.geolocateControl);
        } catch (error) {
          console.error('Error al eliminar el control de geolocalización:', error);
        }
      }
      this.map.remove();
    }
  }

  // Método para obtener restaurantes y agregar marcadores
  addRestaurantMarkers(): void {
    this._listaRestaurantes.getRestaurantesCercanos().subscribe((restaurantes: IListaRestaurantes[]) => {
      console.log("Lista de restaurantes obtenida:", restaurantes);
  
      if (!this.map) {
        console.error("El mapa no se ha inicializado correctamente.");
        return;
      }
  
      const markers: L.LatLngExpression[] = [];
  
      restaurantes.forEach((restaurante, index) => {
        const lat = restaurante.location?.latitude;
        const lng = restaurante.location?.longitude;
  
        if (lat && lng) {
          console.log(`✅ Agregando marcador #${index + 1}: ${restaurante.name} en (${lat}, ${lng})`);
  
          const icon = L.icon({
            iconUrl: '../../../assets/images/ubicacion.png',
            iconSize: [45, 41],
            iconAnchor: [12, 41]
          });
  
          const marker = L.marker([lat, lng], { icon: icon })
            .addTo(this.map!)
            .bindPopup(`<b>${restaurante.name}</b><br>${restaurante.address}`);
  
          markers.push([lat, lng]);
        } else {
          console.warn(`⚠️ El restaurante ${restaurante.name} no tiene coordenadas.`);
        }
      });
  
      // Ajustar la vista solo si hay marcadores
      if (markers.length > 0) {
        const bounds = L.latLngBounds(markers);
        this.map!.fitBounds(bounds);
        console.log("📍 Ajustando vista a los marcadores");
      } else {
        console.warn("⚠️ No se agregaron marcadores, revisa las coordenadas.");
      }
    }, error => {
      console.error('❌ Error al obtener los restaurantes:', error);
    });
  }
  


  // Creación correcta del control de geolocalización
  createGeolocateControl() {
    try {
      // Creamos una clase de control personalizada y la instanciamos inmediatamente.
      const GeolocateControl = L.Control.extend({
        options: { position: 'topleft' },
        onAdd: (map: L.Map) => {
          const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
          container.innerHTML = `<button class="boton-leaflet">Localizar</button>`;
          L.DomEvent.disableClickPropagation(container);
          if (container.firstChild) {
            L.DomEvent.on(container.firstChild as HTMLElement, 'click', () => {
              this.geolocalizar();
            });
          } else {
            console.error("No se pudo encontrar el botón en el contenedor del control.");
          }
          return container;
        }
      });

      // Instanciamos el control
      this.geolocateControl = new GeolocateControl();
      this.map?.addControl(this.geolocateControl);
      console.log('Geolocate control añadido al mapa');
    } catch (error) {
      console.error("Error al crear el control:", error);
    }
  }

  geolocalizar(): void {
    const myIcon = L.icon({
      iconUrl: '../../../assets/images/ubicacion.png',
      iconSize: [45, 41],
      iconAnchor: [7, 25]
    });
    const coords: [number, number] = [40.71277179, -74.00597648];
    const popupContent = 'Ubicación por defecto';
    L.marker(coords, { icon: myIcon, draggable: true })
      .addTo(this.map!)
      .bindPopup(popupContent)
      .openPopup();
    this.map!.setView(coords, 13);
  }
}
