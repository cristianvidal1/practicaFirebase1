import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesoresComponent } from './cursos/profesores/profesores.component';
import { SextoPrimeraComponent } from './cursos/sexto-primera/sexto-primera.component';
import { SextoSegundaComponent } from './cursos/sexto-segunda/sexto-segunda.component';
import { FormularioComponent } from './formularios/formulario/formulario.component';

const routes: Routes = [
  {
    path: 'profesores', component: ProfesoresComponent
  },
  {
    path: 'sexto-primera', component: SextoPrimeraComponent
  },
  {
    path: 'sexto-segunda', component: SextoSegundaComponent
  },
  {
    path: 'formulario', component: FormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
