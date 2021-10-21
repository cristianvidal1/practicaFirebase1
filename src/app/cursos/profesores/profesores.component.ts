import { Component, OnInit } from '@angular/core';
import { UsuariosService} from 'src/app/services/producto.service'
import { Usuarios } from 'src/app/models/producto.interface';
@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
  public usuarios!: Usuarios[];
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.Usuarios.subscribe((respuesta: any[]) => (this.usuarios = respuesta))
    console.log(this.usuarios);
  }

}
