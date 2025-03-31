import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit, AfterViewInit, OnDestroy {

  map: any;
  private userMaker?: L.Marker<any>;
  defaultCoordinates = { latitude: 4.5748, longitude: -74.559 };
  private geolocateControl: any; // Referencia al control de geolocalización

  sensorsData = [
    { id: 1, name: 'Finca la libertad', latitude: 4.5748, longitude: -74.559 },
  ];

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    try {
      this.map = L.map('map').setView([this.defaultCoordinates.latitude, this.defaultCoordinates.longitude], 9);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      this.addSensorsMarkers();
      this.createGeolocateControl(); // Crear el control después de inicializar el mapa
    } catch (error) {
      console.error("Error al inicializar el mapa:", error);
    }
  }

  ngOnDestroy(): void {
    if (this.map) {
      // Eliminar control solo si existe
      if (this.geolocateControl) {
        try {
          this.map.removeControl(this.geolocateControl); // Eliminar el control
        } catch (error) {
          console.error('Error al eliminar el control de geolocalización:', error);
        }
      }
  
      // Eliminar el mapa
      this.map.remove();
    }
  }
  
  

  addSensorsMarkers(): void {
    const myIcon = L.icon({
      iconUrl: '../../assets/imagenes/ubicacion.png',
      iconSize: [25, 41]
    });
    this.sensorsData.forEach(sensor => {
      L.marker([sensor.latitude, sensor.longitude], { icon: myIcon })
        .addTo(this.map)
        .bindPopup(`<b>${sensor.name}</b><br>Latitud: ${sensor.latitude}<br>Longitud: ${sensor.longitude}`);
    });
  }

  geolocalizar(): void {
    const myIcon = L.icon({
      iconUrl: '../../assets/imagenes/ubicacion.png',
      iconSize: [25, 41]
    });

    const coords: [number, number] = [this.defaultCoordinates.latitude, this.defaultCoordinates.longitude];
    const defaultSensor = this.sensorsData.find(sensor => sensor.latitude === coords[0] && sensor.longitude === coords[1]);

    let popupContent = 'Ubicación por defecto';
    if (defaultSensor) {
      popupContent = `<b>${defaultSensor.name}</b><br>Latitud: ${defaultSensor.latitude}<br>Longitud: ${defaultSensor.longitude}`;
    }

    if (this.userMaker) {
      this.userMaker.setLatLng(coords).setIcon(myIcon).bindPopup(popupContent).openPopup();
    } else {
      this.userMaker = L.marker(coords, { icon: myIcon, draggable: true }).addTo(this.map)
        .bindPopup(popupContent)
        .openPopup();
    }

    this.map.setView(coords, 13);
  }

  createGeolocateControl() {
    try {
      this.geolocateControl = L.Control.extend({
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
            console.error("No se pudo encontrar el botón dentro del contenedor del control.");
          }
  
          return container;
        }
      });
      this.map.addControl(new this.geolocateControl()); // Usar la referencia guardada
      console.log('Geolocate control añadido al mapa'); // Verificar que se añadió
    } catch (error) {
      console.error("Error al crear el control:", error);
    }
  }
  
}