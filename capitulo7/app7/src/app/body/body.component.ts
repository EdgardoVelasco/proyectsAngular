import { Component } from '@angular/core';
import { Perro } from '../services/clases';
import { PerrosService } from '../services/perros.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  perros:Perro[]=[];

  constructor(private service:PerrosService){
    this.service.getPerros().subscribe({
      next: value=>{this.perros=value;},
      error: err=>{
        console.log("Algo paso: "+err);
      }
    });
  }

}
