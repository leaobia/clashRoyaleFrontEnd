import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaCartasComponent } from './lista-cartas/lista-cartas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaCartasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'clashRoyaleFrontEndAngular';
  mostrar: boolean = false;

  toggle () {
    this.mostrar = !this.mostrar;
  }
}
