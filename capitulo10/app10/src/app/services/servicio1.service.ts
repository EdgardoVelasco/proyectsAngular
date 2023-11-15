import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Servicio1Service {
  private _titulo:string="mi pagina web";
  private _nombre:string="edgardo";
  private _apellido:string="velasco";
  private _fechaObservable:Observable<Date>;
  
  constructor() { 
    this._fechaObservable=new Observable(
      observer=>{
        setInterval(()=>observer.next(new Date()), 1000);
      }
    );

  }

  get titulo():string{return this._titulo;}
  get nombre():string{return this._nombre;}
  get apellido():string{return this._apellido;}
}
