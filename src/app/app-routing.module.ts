import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarAsociacionComponent } from './components/asociaciones/listar-asociacion/listar-asociacion/listar-asociacion.component';
import { AddAsociacionComponent } from "./components/asociaciones/add-asociacion/add-asociacion/add-asociacion.component";
import { UpdateAsociacionComponent } from "../app/components/asociaciones/upd-asociacion/update-asociacion/update-asociacion.component";
const routes: Routes = [
  {
     path: 'lista', component: ListarAsociacionComponent,
     
  },
  {
    path: 'tipo/add', component : AddAsociacionComponent
  },
  {
    path : 'editar/:id', component: UpdateAsociacionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
