import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  numero:number=0;

  onChangeValue(value:string){
    if(value.match(/^[0-9]+/)){
      this.numero=Number(value);
    }else if(value.length==0){
       this.numero=0;
    }
  }

  incremento(){
    this.numero+=1;
  }

  decremento(){
    this.numero-=1;
    if(this.numero<0){
       this.numero=0;
    }
  }

}
