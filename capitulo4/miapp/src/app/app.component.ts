import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miapp';
  nombre:string="Edgardo VF";
  edad:number=30;
  correo:string="edgardo.velasco@gmail.com";

}
