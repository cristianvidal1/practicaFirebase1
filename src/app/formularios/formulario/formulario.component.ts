import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from 'src/app/models/usuarios.interface';
import { UsuariosService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public newUsuariosForm= new FormGroup({
    Nombre: new FormControl('',Validators.required),
    Url: new FormControl('', Validators.required),
    id: new FormControl('')
  });
  usuarios: Usuarios[]= [];

//constructor para el servicio de usuarios y su formulario
constructor(private serviceUsuarios: UsuariosService) { 
    this.serviceUsuarios.Usuarios.subscribe((resp: Usuarios[]) =>{
      this.usuarios= resp;
      console.log(this.usuarios)
    })
}

ngOnInit(): void {
}

onSubmit(f: { value: any; }) {
    console.log(f.value);
}
//editar usuarios desde el formulario
editarUsuario(usuario: Usuarios){
  this.newUsuariosForm.setValue({
    id: '',
    Nombre: usuario.Nombre,
    Url: '',
  })
}
//borrar usuarios desde el formulario
borrarUsuarios(usuario: Usuarios){
  this.serviceUsuarios.borrarUsuario(usuario.id).then(()=>{
    console.log('Usuario eliminado');
  }, (error: any) => {
    console.error(error);
  });
}
}
