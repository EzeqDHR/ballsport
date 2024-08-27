import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from '../../shared/nav/nav.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { DatosService } from '../../services/datos.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NavComponent, FooterComponent, CurrencyPipe],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
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
