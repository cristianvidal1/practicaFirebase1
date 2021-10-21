import { Component, OnInit } from '@angular/core';

import { UsuariosService} from 'src/app/services/producto.service'
import { Usuarios } from '../models/producto.interface';
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  
  public usuarios!: Usuarios[];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.Usuarios.subscribe((respuesta: any[]) => (this.usuarios = respuesta))
    console.log(this.usuarios);
  }

}
