import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { MultiplicacionAxBComponent } from './formularios/multiplicacion-ax-b/multiplicacion-ax-b.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { MenuComponent } from './menu/menu/menu.component';
import { CinepolisComponent } from './formularios/cinepolis/CinepolisComponent';
import { HomeComponent } from './formularios/home/home.component';
import { CuestionarioComponent } from './formularios/examen/cuestionario/cuestionario.component';
import { ResultadoComponent } from './formularios/examen/resultado/resultado.component';
import { AgregarComponent } from './formularios/examen/agregar/agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    OperasBasComponent,
    MultiplicacionAxBComponent,
    MenuComponent,
    CinepolisComponent,
    HomeComponent,
    CuestionarioComponent,
    ResultadoComponent,
    AgregarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, 
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
