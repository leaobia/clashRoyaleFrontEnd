import { Component } from '@angular/core';
import { CartaComponent } from '../carta/carta.component';

import { CommonModule } from '@angular/common';
import { CartaService } from '../../_services/carta.service';
import { HttpClientModule } from '@angular/common/http';
import { Carta } from '../../_model/carta.interface';

@Component({
  selector: 'app-lista-cartas',
  standalone: true,
  imports: [CartaComponent, CommonModule, HttpClientModule],
  templateUrl: './lista-cartas.component.html',
  styleUrl: './lista-cartas.component.sass'
})

export class ListaCartasComponent {
  public cartas: Carta[] = [
   
  ];

  constructor(
    public cartaService: CartaService
  ){

  }

}