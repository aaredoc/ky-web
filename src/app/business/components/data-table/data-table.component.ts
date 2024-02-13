import { Component, Input } from '@angular/core';
import { Aportante } from '../../interfaces/aportante';
import { Persona } from '../../interfaces/persona';

@Component({
  selector: 'business-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
  @Input()
  public personas: Persona[] = [
    {
      nombre: 'Pepe',
      apellidoPaterno: 'Ramirez',
      apellidoMaterno: 'Ruiz',
      identificacion: '92939294',
      email: 'pepe@gmail.com',
      celular: '923949321'
    },
      {
        nombre: 'Maria',
        apellidoPaterno: 'Sanchez',
        apellidoMaterno: 'Rodriguez',
        identificacion: '33331629',
        email: 'maria@gmail.com',
        celular: '923949323'
      },
      {
        nombre: 'Mateo',
        apellidoPaterno: 'Vasquez',
        apellidoMaterno: 'Lozano',
        identificacion: '232323232',
        email: 'mateo@gmail.com',
        celular: '943939392'
      },
      {
        nombre: 'Roberto',
        apellidoPaterno: 'Torres',
        apellidoMaterno: 'Leon',
        identificacion: '82938267',
        email: 'roberto@gmail.com',
        celular: '949504321'
      },

  ];
}
