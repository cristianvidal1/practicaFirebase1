import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuarios.interface';
import { UsuariosService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public usuarios!: Usuarios[];
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.Usuarios.subscribe(respuesta => (this.usuarios = respuesta))
  }

}
