import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { ListarAsociacionComponent } from "./components/asociaciones/listar-asociacion/listar-asociacion/listar-asociacion.component";
import { UpdateAsociacionComponent } from './components/asociaciones/upd-asociacion/update-asociacion/update-asociacion.component';
import { MatIconModule } from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {AppRoutingModule} from './app-routing.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {LayoutModule} from '@angular/cdk/layout';
import { TipoAsociacionService } from './service/tipo-asociacion.service';
import { AddAsociacionComponent } from './components/asociaciones/add-asociacion/add-asociacion/add-asociacion.component';
@NgModule({
  declarations: [
    AppComponent,
    ListarAsociacionComponent,
    UpdateAsociacionComponent,
    AddAsociacionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    LayoutModule
  ],
  providers: [TipoAsociacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
