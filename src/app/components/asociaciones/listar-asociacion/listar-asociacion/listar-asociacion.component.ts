import { Component, OnInit } from '@angular/core';
import { TipoAsociacionService } from 'src/app/service/tipo-asociacion.service';
import { TipoAsociacion } from 'src/app/models/tipo-asociacion';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-listar-asociacion',
  templateUrl: './listar-asociacion.component.html',
  styleUrls: ['./listar-asociacion.component.css']
})
export class ListarAsociacionComponent implements OnInit {
  listausuarios : any;
  constructor(private usuarioService : UsuarioService, private router : Router) { }

  ngOnInit(): void {
    this.listarusuarioper();
  }
  
  listarusuarioper(){
    this.usuarioService.getLista().subscribe(
      (datos)=>{ console.log(datos)
        this.listausuarios= datos[0]['CUR_USUARIO_PERSONA']
        console.log(datos[0]['CUR_USUARIO_PERSONA'])
      }
    )
  }




}
