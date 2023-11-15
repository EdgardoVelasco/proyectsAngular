import { Component } from '@angular/core';
import { Servicio1Service } from './services/servicio1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string;
  apellido:string;
  titulo:string;

  constructor(private service:Servicio1Service){
    this.nombre=this.service.nombre;
    this.apellido=this.service.apellido;
    this.titulo=this.service.titulo;
  }
  
}
