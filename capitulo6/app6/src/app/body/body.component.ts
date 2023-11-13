import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  data:string="";
  vocales:string[]=[];
  noVocales:string[]=[];

  onChangeValue(value:string){
    if(value.toUpperCase().match(/^[A-Z]{3,}/)){
      //console.log(`el valor es ${value}`);
      this.data=value.toUpperCase();
    }
  }

  condicion():boolean{
    return this.data.match(/^[A,E,I,O,U].+/)!==null;
  }

  private buscar(lista:string[]):string{
    for(let tmp of lista){
      if(tmp.toUpperCase()===this.data){
           return tmp;
      }
    }
    return "";
  }

  insertar(){
    if(this.condicion() && this.buscar(this.vocales).length==0){
      this.vocales.push(this.data);
    }else{
       if(this.data.length>1 && this.buscar(this.noVocales).length==0){
         this.noVocales.push(this.data);
       }
    }
  }



}
