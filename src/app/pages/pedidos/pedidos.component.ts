import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from '../../shared/nav/nav.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { DatosService } from '../../services/datos.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NavComponent, FooterComponent, CurrencyPipe],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {
  pedidosList:any;
  constructor(private pedidosFirebase:DatosService)
  {
    this.pedidosFirebase.getPedidos().subscribe({
      next: data => {this.pedidosList=data;console.log(data)},
      error: error => console.error('error: ',error),
      complete: () => console.log('datos list loaded')
    })
  }
}

