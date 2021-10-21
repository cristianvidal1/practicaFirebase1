import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/producto.interface';
import { UsuariosService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-sexto-segunda',
  templateUrl: './sexto-segunda.component.html',
  styleUrls: ['./sexto-segunda.component.css']
})
export class SextoSegundaComponent implements OnInit {
  public usuarios!: Usuarios[];
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.Usuarios.subscribe((respuesta: any[]) => (this.usuarios = respuesta))
    console.log(this.usuarios);
  }

}
