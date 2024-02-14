import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, map } from 'rxjs';
import { Carta } from '../_model/carta.interface';

@Injectable({
  providedIn: 'root'
})
export class CartaService {

  public cartas = new ReplaySubject<Carta[]>(1);

  constructor(
    private httpClient: HttpClient
  ) {
    const url = 'http://localhost/clashRoyale/?action=cartas';
    this.httpClient.get<any>(url).subscribe(response => {
      if (response && response.status === 200 && response.cartas) {
        const cartasJson = JSON.parse(response.cartas);
        this.cartas.next(cartasJson);
      } else {
        console.error('Dados de cartas não retornados corretamente:', response);
      }
    });
  }
}

