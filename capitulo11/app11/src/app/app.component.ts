import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app11';

  formulario1= new FormGroup({
    nombre:new FormControl("", [Validators.required]),
    edad: new FormControl(""),
    correo: new FormControl("", [Validators.required])
  });

  onSubmit(){
    if(!this.nameErrors && !this.correoErrors){
     console.log("-*-*-*Valores de formulario-*-*-*");
     console.log(`nombre: ${this.formulario1.value.nombre??"default"}`);
     console.log(`edad: ${this.formulario1.value.edad??0}`);
     console.log(`correo: ${this.formulario1.value.correo??"default"}`);
    }
  }

  get nameErrors():boolean{
    return this.formulario1.get("nombre")?.errors?.['required']??false;
  }

  get correoErrors():boolean{
    return this.formulario1.get("correo")?.errors?.['required']??false;
  }


}
