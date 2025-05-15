import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import api from "../../../Api/api.json"
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private _http:HttpClient) { }

  getPaises():Observable<any>{
    return this._http.get(api.apiPaises.urls.getPaises).pipe(
      catchError(err => {
        console.error('[PaisesService] Error al cargar países', err);
        return throwError(() => new Error('No se pudo cargar la lista de países'));
      })
    );
  }

  getRegion(region:string){
    return this._http.get(api.apiPaises.urls.getRegion+region).pipe(
      catchError(err => {
        console.error('[PaisesService] Error al cargar países', err);
        return throwError(() => new Error('No se pudo cargar la lista de países'));
      })
    );
  }

  getPais(name:string){
    return this._http.get(api.apiPaises.urls.getPais+name).pipe(
      catchError(err => {
        console.error('[PaisesService] Error al cargar países', err);
        return throwError(() => new Error('No se pudo cargar la lista de países'));
      })
    );
  }
}
