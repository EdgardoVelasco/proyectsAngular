import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, timeout } from 'rxjs';
import { Perro } from './clases';

@Injectable({
  providedIn: 'root'
})
export class PerrosService {
  private _urlWebService:string="http://www.patitonet.com/perros";

  /*Inyectamos a HttpClient en nuestro servicio*/
  constructor(private http:HttpClient) { }

  getPerros():Observable<Perro[]>{

    return this.http
    .get<any[]>(this._urlWebService)
    .pipe(timeout(2500), 
     map(listaJson=>listaJson.map(json=> 
      new Perro(
        json.name,
        json.description,
        json.maxLife,
        json.urlImage
      )))
      );
  }

}
