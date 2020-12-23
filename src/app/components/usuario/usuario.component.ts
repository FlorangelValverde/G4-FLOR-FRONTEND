import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuariopersona } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarioModel: Usuariopersona = new Usuariopersona();

  constructor( private usuarioservice:UsuarioService, private router:Router) { }

  ngOnInit(): void {
  }
agregarusuario (): void {
  this.usuarioservice.addusuario(this.usuarioModel).subscribe(
    response=>{
      swal.fire({
        icon: 'success',
        title: 'Usuario Registrado',
        text: 'Tu usuario se a registrado exitosamente :D'
      })
      this.router.navigate(['/']);
    }
    
  )
}
}
