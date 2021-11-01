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
title = 'practicaFirebase1';
 
public usuarios: Usuarios[]=[];
public cursos: Curso[]=[];
public documentId = null;
public currentStatus = 1;
 
items: MenuItem[] = [];
ngOnInit(): void {
  //Navegacion del menú PrimeNg
  this.items = [
    {
      label: 'Inicio',
      routerLink: '/personas',
      icon: 'pi pi-fw pi-home',
    },
    {
      label:'Profesores',
      routerLink: '/profesores',
      icon: 'pi pi-fw pi-home',
    }
  ];
  this.newUsuariosForm;
}





//<--------------------Acá empieza Firebase

 //Formulario de Usuarios
 public newUsuariosForm = new FormGroup({
   Nombre: new FormControl('',Validators.required),
   Url: new FormControl('', Validators.required),
   id: new FormControl('')
 });
 //Formulario de Cursos
 public newCursoForm = new FormGroup({
   Alumnos: new FormControl('', Validators.required),
   Descripcion: new FormControl('', Validators.required),
   Nombre: new FormControl('', Validators.required)
 });


//constructor para el servicio de usuarios y su formulario
constructor(private serviceUsuarios: UsuariosService, private serviceCurso: CursoService){
    this.serviceUsuarios.Usuarios.subscribe((resp: Usuarios[])=> {
      this.usuarios= resp;
      console.log(this.usuarios);

    })
    this.serviceCurso.Cursos.subscribe((resp: Curso[])=> {
      this.cursos= resp;
      console.log(this.cursos);
    })
}
  

onSubmit(f: { value: any; }) {
    console.log(f.value, this.newUsuariosForm);
}
//Editar a un usuario
editarUsuario(usuario: Usuarios){
  this.newUsuariosForm.setValue({
    id: '',
    Nombre: usuario.Nombre, 
    Url: '',
  })
}
//Eliminar un usuario
borrarUsuario(usuarioid: string){
  this.serviceUsuarios.borrarUsuario(usuarioid).then(()=>{
    console.log(usuarioid);
  }, (error: any) => {
    console.error(error);
  });
}

//Editar Curso
editarCurso(curso: Curso){
  this.newCursoForm.setValue({
    Alumnos: curso.Alumnos,
    Nombre: curso.Nombre,
    Descripcion: curso.Descripcion
  })
}
//Eliminar Curso
eliminarCursos(cursoId: string){
  this.serviceCurso.eliminarCursos(cursoId).then(() => {
    console.log(cursoId);
  }, (error: any) => {
    console.log(error);
  });
}
}
