import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  userRole:string = 'invitado';
  userLoginOn: boolean= false;

  constructor(private loginService:DatosService, private router:Router)  
  {
     this.loginService.userLoginOn.subscribe({
       next: (loginStatus: boolean) => {
         this.userLoginOn = loginStatus;
       },
       error: (error) => console.error('Error: ', error)
     })

     this.loginService.userRol.subscribe({
       next: (rol: string) => {
         this.userRole = rol;
       },
       error: (error) => console.error('Error: ', error)
     })

  }
  
  cerrarSesion()
  {
    this.loginService.cerrarSesion()
  }
}
