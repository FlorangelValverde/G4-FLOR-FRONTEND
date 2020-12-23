import { Injectable } from '@angular/core';
import { TipoAsociacion } from '../models/tipo-asociacion';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable, Subscription, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoAsociacionService {
  private httpHeaders = new HttpHeaders ({'Content-Type': 'application/json'});
  private url : string = 'http://localhost:1313/usuarios';
  constructor(private http : HttpClient) { }
  get(): Observable<TipoAsociacion[]>{
      return this.http.get<TipoAsociacion[]>(this.url + '/all');
  }
  
  post(Tipoasociacion : TipoAsociacion){
    return this.http.post(this.url + '/add' , Tipoasociacion, {headers: this.httpHeaders});
  }
  delete(id:number){
    return this.http.delete(this.url + '/delete' + `/${id}`);
  }
  put(tipoasociaciones : TipoAsociacion): Observable<number>{
    return this.http.put<number>(this.url+ `/edit/${tipoasociaciones.idtipo_asociacion}`, tipoasociaciones, {headers: this.httpHeaders});

  }
  getunique(id:number): Observable<Object>{
    return this.http.get(`${this.url}/${id}`);
  }
    
}
