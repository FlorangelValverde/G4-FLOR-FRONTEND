import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { TipoAsociacion } from 'src/app/models/tipo-asociacion';
import { TipoAsociacionService } from 'src/app/service/tipo-asociacion.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-update-asociacion',
  templateUrl: './update-asociacion.component.html',
  styleUrls: ['./update-asociacion.component.css']
})
export class UpdateAsociacionComponent implements OnInit {
  tipos : any;
  tipoModel:TipoAsociacion = new TipoAsociacion();



  constructor(private tipo:TipoAsociacionService,
    private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarRol();
  }
  cargarRol():void{
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id']
      console.log(id);
      if(id){
        this.tipo.getunique(id).subscribe(
          (data)=>{
            this.tipos = data["CUR_TIPO_ASOCIACION"]
            console.log(id);
          this.tipoModel.idtipo_asociacion= this.tipos[0].IDTIPO_ASOCIACION;
        })
      }
    })
  }

  modificarRol(){
    this.tipo.put(this.tipoModel).subscribe(
      response=>{
        swal.fire({
          title: 'Estas seguro?',
          text: "No podras revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/listar'])
            swal.fire(
              'Actualizado!',
              'El registro ha sido Modificado.',
              'success'
            )
          }
        })    
    })
  }



  


}
