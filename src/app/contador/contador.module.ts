import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorHijoComponent } from './contador-hijo/contador-hijo.component';
import { ContadorPadreComponent } from './contador-padre/contador-padre.component';



@NgModule({
  declarations: [
    ContadorPadreComponent,
    ContadorHijoComponent
  ],

  imports: [
    CommonModule
  ],
  exports: [
    ContadorPadreComponent,
    ContadorHijoComponent
  ]
})
export class ContadorModule { }
