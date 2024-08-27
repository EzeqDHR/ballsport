import { Component } from '@angular/core';
import { NavComponent } from '../../shared/nav/nav.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { DatosService } from '../../services/datos.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-cliente',
  standalone: true,
  imports: [NavComponent, FooterComponent, RouterLink, RouterOutlet, CurrencyPipe],
  templateUrl: './dashboard-cliente.component.html',
  styleUrl: './dashboard-cliente.component.css'
})
export class DashboardClienteComponent {
  producList:any;
  constructor(private productFirebase:DatosService)
  {
    this.productFirebase.getProduct().subscribe({
      next: data => {this.producList=data;console.log(data)},
      error: error => console.error('error: ',error),
      complete: () => console.log('datos list loaded')
    })
  }

  addCarrito(){
    
  }

}