import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { MultiplicacionAxBComponent } from './formularios/multiplicacion-ax-b/multiplicacion-ax-b.component';
import { CinepolisComponent } from './formularios/cinepolis/CinepolisComponent';
import { HomeComponent } from './formularios/home/home.component';
import { AgregarComponent } from './formularios/examen/agregar/agregar.component';
import { CuestionarioComponent } from './formularios/examen/cuestionario/cuestionario.component';
import { ResultadoComponent } from './formularios/examen/resultado/resultado.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'temperatura',component:OperasBasComponent },
  {path:'multiplicacion',component:MultiplicacionAxBComponent },
  {path:'cinepolis',component:CinepolisComponent },
  {path:'agregar',component:AgregarComponent },
  {path:'cuestionario',component:CuestionarioComponent },
  {path:'certificado',component:ResultadoComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
