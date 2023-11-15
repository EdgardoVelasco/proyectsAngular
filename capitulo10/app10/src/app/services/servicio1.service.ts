import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Servicio1Service {
  private _titulo:string="mi pagina web";
  private _nombre:string="edgardo";
  private _apellido:string="velasco";
  constructor() { }

  get titulo():string{return this._titulo;}
  get nombre():string{return this._nombre;}
  get apellido():string{return this._apellido;}
}
