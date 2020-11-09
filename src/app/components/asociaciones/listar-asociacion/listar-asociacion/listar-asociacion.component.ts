import { Component, OnInit } from '@angular/core';
import { TipoAsociacionService } from 'src/app/service/tipo-asociacion.service';
import { TipoAsociacion } from 'src/app/models/tipo-asociacion';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';






@Component({
  selector: 'app-listar-asociacion',
  templateUrl: './listar-asociacion.component.html',
  styleUrls: ['./listar-asociacion.component.css']
})
export class ListarAsociacionComponent implements OnInit {
  tipos : any;
  constructor(private tipoAsociacionservice : TipoAsociacionService, private router : Router) { }

  ngOnInit(): void {
    this.listar();
  }
  delTipo(num:number):void{
    console.log("alo soy eliminar")
   
        Swal.fire({
          title: 'Estas seguro?',
          text: "No podras revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, borralo!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.listar()
            Swal.fire(
              'Eliminado!',
              'El registro ha sido eliminado.',
              'success'
            )
          }
          this.tipoAsociacionservice.delete(num).subscribe(
            response=>{
              console.log(response);
        })
      }
    )    
  }





  listar():void{
    this.tipoAsociacionservice.get().subscribe(
      (data)=>{
        this.tipos = data['CUR_TIPO_ASOCIACION'];
        console.log(data['CUR_TIPO_ASOCIACION']);
      }
    )

  }





}
