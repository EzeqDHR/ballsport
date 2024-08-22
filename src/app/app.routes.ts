import { PathLocationStrategy } from '@angular/common';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './pages/landing/landing.component';
import { DashboardClienteComponent } from './pages/dashboard-cliente/dashboard-cliente.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { PedidosClienteComponent } from './pages/pedidos/pedidos-cliente/pedidos-cliente.component';


export const routes: Routes = [
   {path:'login', component:LoginComponent},
   {path:'landing',component:LandingComponent},
   {path:'cliente',component:DashboardClienteComponent},
   {path:'productos',component:ProductosComponent},
   {path:'carrito', component:CarritoComponent},
   {path: 'pedidos', component:PedidosComponent}, 
   {path:'pedidos-cliente',component:PedidosClienteComponent}   
   
];