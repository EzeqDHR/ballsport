import { Component, Pipe } from '@angular/core';
import { NavComponent } from '../../shared/nav/nav.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { DatosService } from '../../services/datos.service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [NavComponent, FooterComponent, CurrencyPipe, DatePipe, RouterLink, RouterOutlet],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  poductosClienteList:any;
  constructor(private pedidosFirebase:DatosService)
  {
    this.pedidosFirebase.getProductosCliente().subscribe({
      next: data => {this.poductosClienteList=data;console.log(data)},
      error: error => console.error('error: ',error),
      complete: () => console.log('datos list loaded')
    })
  }
}
