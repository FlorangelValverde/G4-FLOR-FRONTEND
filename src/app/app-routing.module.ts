import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarAsociacionComponent } from './components/asociaciones/listar-asociacion/listar-asociacion/listar-asociacion.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  { path: 'usuario', component: UsuarioComponent },
  {path: '' , component: ListarAsociacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
