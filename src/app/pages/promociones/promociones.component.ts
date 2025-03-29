import { Component, OnInit } from '@angular/core';
import { PromocionesService } from 'src/app/services/promociones.service';
import { IPromociones } from 'src/app/models/promociones.model';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {
  promociones: IPromociones[] = [];

  constructor(private _promocionesService: PromocionesService) {}

  ngOnInit(): void {
    this._promocionesService.getPromociones().subscribe(data => {
      this.promociones = data;
    });
  }
}
