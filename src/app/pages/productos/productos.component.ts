import { Component } from '@angular/core';
import { NavComponent } from '../../shared/nav/nav.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})

export class ProductosComponent {
  producList:any;
  constructor(private productFirebase:DatosService)
  {
    this.productFirebase.getProduct().subscribe({
      next: data => {this.producList=data;console.log(data)},
      error: error => console.error('error: ',error),
      complete: () => console.log('datos list loaded')
    })
  }
}
