import { Component } from '@angular/core';
import { Usuarios } from './models/usuarios.interface';
import { UsuariosService } from 'src/app/services/usuario.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import * as firebase from 'firebase/compat';
import { Curso } from './models/curso.interface';
import { CursoService } from './services/curso.service';
import {MenuItem, PrimeIcons} from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'Proyecto Camara Comercio';
items: MenuItem[] = [];
//Declarando imagenes para el slider


ngOnInit(): void {
  //Navegacion del menú PrimeNg
  this.items = [
    {
      label: 'Inicio',
      routerLink: '/app',
      icon: 'pi pi-fw pi-home',
    },
    {
      label:'Personas',
      routerLink: '/personas',
      icon: 'pi pi-fw pi-home',
    },
    {
      label:'Menu',
      routerLink:'/menu',
      icon:'',
    },
    {
      label:'Productos',
      routerLink:'/productos',
      icon:'',
    },
  ];
 
}
}







