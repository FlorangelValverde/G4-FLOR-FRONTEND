import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { TipoAsociacion } from 'src/app/models/tipo-asociacion';
import { TipoAsociacionService } from 'src/app/service/tipo-asociacion.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-asociacion',
  templateUrl: './add-asociacion.component.html',
  styleUrls: ['./add-asociacion.component.css']
})
export class AddAsociacionComponent implements OnInit {
  tipoModel:TipoAsociacion = new TipoAsociacion();
  constructor(private tipo:TipoAsociacionService,
    private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  public create():void{       
    
}
}
