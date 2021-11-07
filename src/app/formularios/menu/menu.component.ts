import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso.interface';
import { Usuarios } from 'src/app/models/usuarios.interface';
import { CursoService } from 'src/app/services/curso.service';
import { UsuariosService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
//Funciones para subir imágenes
public productosForm: FormGroup
pUpload!: Observable<number|undefined>
urlImage!: Observable<string>

  //Declarando Usuarios
usuarios: Usuarios[]= [];
//constructor para el servicio de usuarios y su formulario
constructor(private serviceUsuarios: UsuariosService, 
            private serviceCurso: CursoService,
            private fb: FormBuilder,
            private storage: AngularFireStorage){
  //Esta parte se suscribe a cada cambio que se realize en usuarios
  this.serviceUsuarios.Usuarios.subscribe((resp: Usuarios[])=> {
    this.usuarios= resp;
    console.log(this.usuarios);
 
  })
  //Esta parte se suscribe a cada cambio que se realize en usuarios
  this.serviceCurso.Cursos.subscribe((resp: Curso[])=> {
    this.cursos= resp;
    console.log(this.cursos);
  })
  this.productosForm = fb.group({
    nombre:['',Validators.required],
    descripcion:['No hay una descripción',Validators.required]
  })
}

ngOnInit(): void {
}
//borrar usuarios desde el formulario
borrarUsuarios(usuario: Usuarios){
  this.serviceUsuarios.borrarUsuario(usuario.id).then(()=>{
    console.log('Usuario eliminado');
  }, (error: any) => {
    console.error(error);
  });
}


//public usuarios: Usuarios[]=[];
public cursos: Curso[]=[];
public documentId = null;
public currentStatus = 1;

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



//Funcion onSubmit 
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
