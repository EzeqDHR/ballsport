import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from '../../shared/nav/nav.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterOutlet, RouterLink,NavComponent, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
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
