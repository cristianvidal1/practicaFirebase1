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
 

 public usuarios?: Usuarios[];
  constructor(private serviceUsuarios: UsuariosService){
    this.serviceUsuarios.Usuarios.subscribe((resp: Usuarios[] | undefined)=> {
      this.usuarios= resp;
      console.log(this.usuarios);

      this.newUsuariosForm.setValue({
        id: '',
        Nombre: '',
        Url: ''
      })
    })
  }
  public documentId = null;
  public currentStatus = 1;
  public newUsuariosForm = new FormGroup({
    Nombre: new FormControl('',Validators.required),
    Url: new FormControl('', Validators.required),
    id: new FormControl('')
  });

}
