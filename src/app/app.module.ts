import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListarAsociacionComponent } from "./components/asociaciones/listar-asociacion/listar-asociacion/listar-asociacion.component";
import { UpdateAsociacionComponent } from './components/asociaciones/upd-asociacion/update-asociacion/update-asociacion.component';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {AppRoutingModule} from './app-routing.module';
import {LayoutModule} from '@angular/cdk/layout';
import { TipoAsociacionService } from './service/tipo-asociacion.service';
import { AddAsociacionComponent } from './components/asociaciones/add-asociacion/add-asociacion/add-asociacion.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsuarioService } from './service/usuario.service';
@NgModule({
  declarations: [
    AppComponent,
    ListarAsociacionComponent,
    UpdateAsociacionComponent,
    AddAsociacionComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    AppRoutingModule,
    LayoutModule,
    ReactiveFormsModule, 
    FormsModule 
  ],
  providers: [TipoAsociacionService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
