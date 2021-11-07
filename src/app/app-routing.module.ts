import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { ProductosComponent } from './component/productos/productos.component';
import { SextoPrimeraComponent } from './cursos/sexto-primera/sexto-primera.component';
import { SextoSegundaComponent } from './cursos/sexto-segunda/sexto-segunda.component';
import { MenuComponent } from './formularios/menu/menu.component';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
  {
    path: 'personas', component: PersonasComponent
  },
  {
    path: 'sexto-primera', component: SextoPrimeraComponent
  },
  {
    path: 'sexto-segunda', component: SextoSegundaComponent
  },
  {
    path: 'menu', component: MenuComponent
  },
  {
    path: 'productos', component: ProductosComponent
  },
  {
    path:'inicio', component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
