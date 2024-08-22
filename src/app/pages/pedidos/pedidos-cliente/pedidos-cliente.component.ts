import { Component, NgModule, Pipe } from '@angular/core';
import { NavComponent } from '../../../shared/nav/nav.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DatosService } from '../../../services/datos.service';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-pedidos-cliente',
  standalone: true,
  imports: [NavComponent,FooterComponent,RouterOutlet,RouterLink, CurrencyPipe,],
  templateUrl: './pedidos-cliente.component.html',
  styleUrl: './pedidos-cliente.component.css'
})
export class PedidosClienteComponent {
  pedidosClienteList:any;
  constructor(private pedidosFirebase:DatosService)
  {
    this.pedidosFirebase.getPedidosCliente().subscribe({
      next: data => {this.pedidosClienteList=data;console.log(data)},
      error: error => console.error('error: ',error),
      complete: () => console.log('datos list loaded')
    })
  }
}

