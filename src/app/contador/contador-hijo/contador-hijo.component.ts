import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contador } from '../interfaces/contador.interface';

@Component({
  selector: 'app-contador-hijo',
  templateUrl: './contador-hijo.component.html',
  styleUrls: ['./contador-hijo.component.css']
})
export class ContadorHijoComponent {

  @Input() contadorItem!: Contador;


  incrementarContador() {
    this.contadorItem.contador++;
  }

  decrementarContador() {
    this.contadorItem.contador--;
  }

  desactivarContador() {
    this.contadorItem.estado = false;

  }



}
