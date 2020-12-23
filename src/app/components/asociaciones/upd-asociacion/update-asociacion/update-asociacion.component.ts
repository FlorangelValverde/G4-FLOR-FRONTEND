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
    
  }



  


}
