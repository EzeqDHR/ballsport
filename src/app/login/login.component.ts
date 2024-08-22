import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DatosService } from '../services/datos.service';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    
    loginForm: FormGroup;
  loginFirestoreService: any;
    constructor(private formBuilder: FormBuilder, private router: Router, private datosServicio:DatosService) {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });

  }


get username() {
  return this.loginForm.controls['email']
}

get password() {
  return this.loginForm.controls['password'];
}

get isFormValid() {
  return this.loginForm.valid;
}

get usernameErrors() {
  const errors = this.username.errors;
  return errors ? (errors['required'] ? 'Username is required.' : errors['email'] ? 'Please enter a valid email address.' : null) : null;
}

get passwordErrors() {
  const errors = this.password?.errors;
  return errors ? (errors['required'] ? 'Password is required.' : null) : null;
}

login() {
  console.log("componente login", this.isFormValid)
 
  if (this.isFormValid)
  { 
    this.datosServicio.login(this.username.value, this.password.value).then((userData) =>
    { 
      if (userData != undefined && userData != null)
      {
        if(userData.rol=="cliente")
          {
          this.router.navigateByUrl('cliente');
          }
          else if (userData.rol=="admin"){
            this.router.navigateByUrl('pedidos')
          }
      }
      else {
        this.router.navigateByUrl('login')
        this.loginForm.markAllAsTouched();
      }
    })
    
  }
  else
  {
    this.loginForm.markAllAsTouched();
  }
}
}
