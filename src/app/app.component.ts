import { Component } from '@angular/core';
import { Usuarios } from './models/producto.interface';
import { UsuariosService } from 'src/app/services/producto.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as firebase from 'firebase/compat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicaFirebase1';
 

 public usuarios: Usuarios[]=[];
 public documentId = null;
 public currentStatus = 1;
 
 public newUsuariosForm = new FormGroup({
   Nombre: new FormControl('',Validators.required),
   Url: new FormControl('', Validators.required),
   id: new FormControl('')
 });

  constructor(private serviceUsuarios: UsuariosService){
    this.serviceUsuarios.Usuarios.subscribe((resp: Usuarios[])=> {
      this.usuarios= resp;
      console.log(this.usuarios);

    })}
  
 
onSubmit(f: { value: any; }) {
    console.log(f.value);
}

editarUsuario(usuario: Usuarios){
  
  this.newUsuariosForm.setValue({
    id: '',
    Nombre: usuario.Nombre,
    Url: ''
  })
}
borrarUsuarios(usuario: Usuarios){
  this.serviceUsuarios.borrarUsuarios(usuario.id).then(()=>{
    console.log('Usuario eliminado');
  }, (error: any) => {
    console.error(error);
  });
}
}
