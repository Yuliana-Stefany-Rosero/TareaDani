import { Component } from '@angular/core';
import { Contador } from '../interfaces/contador.interface';

@Component({
  selector: 'app-contador-padre',
  templateUrl: './contador-padre.component.html',
  styleUrls: ['./contador-padre.component.css']
})
export class ContadorPadreComponent {

  contadorItems: Contador[] = [
    { nombreBoton: 'Botón 1', contador: 0, estado: true },
    { nombreBoton: 'Botón 2', contador: 0, estado: true },
    { nombreBoton: 'Botón 3', contador: 0, estado: true },
    { nombreBoton: 'Botón 4', contador: 0, estado: true },
    { nombreBoton: 'Botón 5', contador: 0, estado: true },
  ];


}
