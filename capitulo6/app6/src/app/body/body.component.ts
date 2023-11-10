import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  data:string="";

  onChangeValue(value:string){
    if(value.toUpperCase().match(/^[A-Z]{3,}/)){
      //console.log(`el valor es ${value}`);
      this.data=value.toUpperCase();
    }
  }

  condicion():boolean{
    return this.data.match(/^[A,E,I,O,U].+/)!==null;
  }

}
