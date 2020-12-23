import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
  private usuarioUrl:string = 'http://localhost:1313/usuarios';
  constructor(
    private http:HttpClient, private router: Router
  ) { 
    
  }
  addusuario (pass:any):Observable<number>{
    
    return this.http.post<number>(this.usuarioUrl+"/add",pass);
  }
  getLista():Observable<any>{
    return this.http.get(this.usuarioUrl+'/listar');}
}
