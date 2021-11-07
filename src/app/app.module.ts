import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


//PrimeNg Modulos
import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import {ImageModule} from 'primeng/image';
import {CarouselModule} from 'primeng/carousel';
import {FieldsetModule} from 'primeng/fieldset';



//Firebase
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { ProductoComponent } from './component/producto/producto.component';
import { environment } from '../environments/environment';
import { SextoPrimeraComponent } from './cursos/sexto-primera/sexto-primera.component';
import { SextoSegundaComponent } from './cursos/sexto-segunda/sexto-segunda.component';
import { ProfesoresComponent } from './cursos/profesores/profesores.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursosComponent } from './agregar/agregar-cursos/agregar-cursos.component';

//Forms
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MenuComponent } from './formularios/menu/menu.component';
import { ProductosComponent } from './component/productos/productos.component';


const routes: Routes = [

]
@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    SextoPrimeraComponent,
    SextoSegundaComponent,
    ProfesoresComponent,
    AgregarCursosComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    ProductosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    MenubarModule,
    CardModule,
    ImageModule,
    CarouselModule,
    FieldsetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

